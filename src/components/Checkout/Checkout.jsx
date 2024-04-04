import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { writeBatch, getDocs, collection, query, where, addDoc, documentId } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const {cart, total, clearCart} = useContext(CartContext)
    const [formData, setFormData] = useState({ nombre: '', telefono: '', email: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const objOrder = {
                buyer: {
                    nombre: formData.nombre,
                    email: formData.email,
                    phone: formData.telefono
                },
                items: cart,
                total
            };
            const batch = writeBatch(db);
            const outOfStock = [];
            const ids = cart.map(prod => prod.id);
            const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids));
            const querySnapshot = await getDocs(productsCollection);
            const { docs } = querySnapshot;
            docs.forEach(doc => {
                const data = doc.data();
                const stockDb = data.stock;
                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart.quantity;
                if(stockDb > prodQuantity){
                    batch.update(doc.ref, {stock: stockDb - prodQuantity});
                } else {
                    outOfStock.push({id: doc.id, ...data});
                }
            });
            if(outOfStock.length === 0){
                batch.commit();
                const orderCollection = collection(db, 'orders');
                const{id} = await addDoc(orderCollection, objOrder);
                clearCart();
                setOrderId(id);
            } else {
                console.error('hay productos que no tienen stock disponible');
            }
        } catch (error) {
            console.error('Error en la generación de la orden:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h1>Su orden está siendo generada</h1>
    }

    if (orderId) {
        return <h1>El id de su orden es: {orderId}</h1>
    }

    return (
        <div>
            <h1>Checkout</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
                </div>
                <div>
                    <label>Teléfono:</label>
                    <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <button type="submit">Generar orden de compra</button>
            </form>
        </div>
    );
}

export default Checkout;














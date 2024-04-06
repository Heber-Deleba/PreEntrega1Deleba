
import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { writeBatch, getDocs, collection, query, where, addDoc, documentId } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const { cart, total, clearCart } = useContext(CartContext);
    const [formData, setFormData] = useState({ nombre: '', telefono: '', email: '', emailValidation: '' });
    


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);

            if (!formData.nombre || !formData.email || !formData.telefono) {
                console.error('Faltan datos requeridos para generar la orden.');
                return;
            }

            if (formData.email !== formData.emailValidation) {
                console.error('El correo electrónico y su validación no coinciden.');
                return;
            }
    
            
            if (cart.length === 0) {
                console.error('El carrito está vacío');
                return;
            }

            const orderCollection = collection(db, 'orders');

            if (typeof total === 'undefined') {
                console.warn('El valor total no está definido. Asignando un valor predeterminado.');
                
                const defaultTotal = 0; 
                setTotal(defaultTotal);
            }

            const objOrder = {
                buyer: {
                    nombre: formData.nombre,
                    email: formData.email,
                    phone: formData.telefono
                },
                items: cart,
                total
            };

            
            const { id } = await addDoc(orderCollection, objOrder);

                clearCart();
                setOrderId(id);
    
            if (cart.length === 0) {
                console.error('El carrito está vacío');
                return;
            }
    
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
                if (stockDb > prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...data });
                }
            });
            if (outOfStock.length === 0) {
                batch.commit();
                const orderCollection = collection(db, 'orders');
                const { id } = await addDoc(orderCollection, objOrder);
                clearCart();
                setOrderId(id);
            } else {
                console.error('Hay productos que no tienen stock disponible');
            }
        } catch (error) {
            console.error('Error en la generación de la orden:', error);
        } finally {
            setLoading(false);
        }
    };
    

    if (loading) {
        return <h1 style={{color:"white"}}>Su orden está siendo generada</h1>
    }

    if (orderId) {
        return <h1 style={{color:"white"}}>El codigo de su orden es: {orderId}</h1>
    }

    return (
        <div>
            <h1 style={{color:"white"}}>Checkout</h1>
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
                <div>
                    <label>Validación de Email:</label>
                    <input type="email" name="emailValidation" value={formData.emailValidation} onChange={handleChange} required />
                </div>
                <button type="submit">Generar orden de compra</button>
            </form>
        </div>
    );
}

export default Checkout;












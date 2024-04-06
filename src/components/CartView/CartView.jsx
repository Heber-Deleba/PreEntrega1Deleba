import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom'



const CartView = () => {
const {cart, removeItem} = useContext(CartContext)

    return (
        <div >
            <h1 style={{color:"white"}}>Carrito</h1>
            <section>
            {
                cart.map(prod => {
                    return(
                        <article style={{display:"flex", justifyContent:"center"}} key={prod.id}>
                            <div style= {{width:200, height:350, margin:10, backgroundColor:"black"}}>
                            <h2 style={{color:"white", fontSize:25, fontWeight:500, margin:10, padding:10,}}>Su Compra</h2>
                            <h3 style={{color:"white", fontSize:15, fontWeight:500, margin:10, padding:10,}}>{prod.nombre}</h3>
                            <h4 style={{color:"red", fontSize:30, fontWeight:500, margin:10, padding:10,}}>PRECIO ${prod.precio}</h4>
                            <button onClick={() => removeItem(prod.id)} style={{backgroundColor:"white", fontSize:20, fontWeight:500,  padding:10,display:"block", marginLeft:50}}>ELIMINAR</button>
                            <Link to='/checkout' style={{color:"white", textDecoration:"none", fontSize:15,}}>Checkout</Link>
                            </div>
                            
                        </article>
                    )
                })

                
            }
            </section>
            
        </div>
    )
}

export default CartView
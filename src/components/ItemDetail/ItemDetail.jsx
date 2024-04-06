import { Link } from "react-router-dom"
import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import classes from "./ItemDetail.module.css"

const InputCount = ({onAdd, stock, initial= 1}) =>{
    const [count, setCount] = useState (initial)

    const handleChange =  (e) => {
        if(e.target.value < stock ) {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onAdd(count)}>agregar al carrito</button>
        </div>
    )
}

const ButtonCount = ({onAdd, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>agregar al carrito</button>
        </div>
    )
}

const ItemDetail = ({id, nombre, img, precio, stock,descripcion}) => {
    const value = useContext(CartContext)
    console.log(value)
    const [inputType, setInputTipe] = useState('button')

    const [quantity, setQuantity] = useState(0)

    const ItemCount = inputType === 'input' ? InputCount : ButtonCount

    
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, nombre, precio, quantity
        }
        console.log(objProductToAdd)
        console.log('agregue al carrito: ', quantity)

        setQuantity(quantity)
    

        addItem(objProductToAdd)
    }

    return (
        <article style={{display:"flex", justifyContent:"center"}}>
        <div className={classes.div} >
            
            <img src={img} style= {{width:200, height:300, margin:10}}/>
            <h2 style={{fontSize:15, color:"white", fontWeight:500,padding:10}}>{nombre}</h2>
            <h3 style={{fontSize:15, color:"white", fontWeight:500,padding:10}}>PRECIO: ${precio}</h3>
            <h4 style={{fontSize:15, color:"white", fontWeight:500,padding:5}}> DESCRIPCION: {descripcion}</h4>
        
        <footer>
            
            {
                quantity === 0 ? (
                    <ItemCount onAdd={handleOnAdd} stock={stock}></ItemCount>
                ) : (
                    <Link to='/cart' style={{color:"red", textDecoration:"none"}}>Terminar Compra</Link>
                )
            }
        </footer>
        </div>
        </article>
        
    )

}

export default ItemDetail



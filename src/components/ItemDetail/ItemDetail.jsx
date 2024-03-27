import { Link } from "react-router-dom"
import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"

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

const ItemDetail = ({id, nombre, img, precio, stock}) => {
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
        <article>
        <div>
            <button onClick={() => setInputTipe(inputType === 'input' ? 'button': 'input')}>cambiar contador</button>
            <img src={img} style= {{width: 100}}/>
            <h2>{nombre}</h2>
            <h3>precio: ${precio}</h3>
            
        </div>
        <footer>
            {
                quantity === 0 ? (
                    <ItemCount onAdd={handleOnAdd} stock={stock}/>
                ) : (
                    <Link to='/cart'>Terminar Compra</Link>
                )
            }
        </footer>
        </article>
        
    )

}

export default ItemDetail



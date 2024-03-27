import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import bolsita from './assets/bolsita.png'



const CartWidget = (props) => {
    

    const { totalQuantity } = useContext(CartContext)

    return (
        <button  className={props.className}>
            <img src={bolsita} />
            {totalQuantity}
        </button>
    )
}

export default CartWidget
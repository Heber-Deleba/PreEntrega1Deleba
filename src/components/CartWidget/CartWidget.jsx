import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import bolsita from './assets/bolsita.png'
import { Link } from 'react-router-dom'


const CartWidget = (props) => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to={'/cart'}  className={props.className}>
            <img src={bolsita} />
            {totalQuantity}
        </Link>
    )
}

export default CartWidget
import bolsita from './assets/bolsita.png'


const CartWidget = (props) => {
    return (
        <button className={props.className}>
            <img src={bolsita} />
            0
        </button>
    )
}

export default CartWidget
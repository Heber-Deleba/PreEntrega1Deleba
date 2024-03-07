
const Item = ({id, nombre, img, precio}) => {
    return (
        <div>
            <h2>{nombre}</h2>
            <img src={img} style= {{width: 100}}/>
            <h3>precio: ${precio}</h3>
        </div>
    )
}

export default Item
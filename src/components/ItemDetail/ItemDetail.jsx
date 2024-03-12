import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, nombre, img, precio, stock}) => {
    return (
        <div>
            <img src={img} style= {{width: 100}}/>
            <h2>{nombre}</h2>
            <h3>precio: ${precio}</h3>
            <ItemCount stock={stock}/>
        </div>
        
    )

}

export default ItemDetail

import {Link} from "react-router-dom"


const Item = ({id, nombre, img, precio, stock}) => {
    return (
        <div>
            <h2>{nombre}</h2>
            <img src={img} style= {{width: 100}}/>
            <h3>precio: ${precio}</h3>
            <h4>stock:{stock}</h4>
            <Link to={`/item/${id}`}>Ver Detalle</Link>
        </div>
    )
}

export default Item
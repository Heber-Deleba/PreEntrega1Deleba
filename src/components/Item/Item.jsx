import {Link} from "react-router-dom"
import classes from "./Item.module.css"


const Item = ({id, nombre, img, precio, stock}) => {
    return (
    
        <div  className={classes.div} >
            <h2 className={classes.h2}>{nombre}</h2>
            <img className={classes.img} src={img}/>
            <h3 className={classes.h3}>PRECIO: ${precio}</h3>
            <h4 className={classes.h4} > STOCK:{stock}</h4>
            <Link className={classes.link} to={`/item/${id}`}>VER DETALLE</Link>
        </div>
    
    )
}

export default Item
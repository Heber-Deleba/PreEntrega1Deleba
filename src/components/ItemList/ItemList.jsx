import Item from "../Item/Item"
import classes from "./ItemList.module.css"

const ItemList = ({products}) => {
    return (
    <section className={classes.section}>
        <div style={{display:"flex", flexWrap:"wrap" ,justifyContent:"space-around", alignItems:"center", backgroundColor:"lightgrey"}} >
            {
                products.map((product) => {
                    return <Item key={product.id} {...product}/>
                })
            }
        </div>
    </section>
    )
}

export default ItemList
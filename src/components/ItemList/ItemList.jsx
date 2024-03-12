import Item from "../Item/Item"

const ItemList = ({products}) => {
    return (
        <div style ={{ display: 'column'}}>
            {
                products.map((product) => {
                    return <Item key={product.id} {...product}/>
                })
            }
        </div>
    )
}

export default ItemList
import Item from "../Item/Item"

const ItemList = ({products}) => {
    return (
        <div style ={{ display: 'flex'}}>
            {
                products.map((product) => {
                    return <Item key={product.id} { ...product} />
                })
            }
        </div>
    )
}

export default ItemList
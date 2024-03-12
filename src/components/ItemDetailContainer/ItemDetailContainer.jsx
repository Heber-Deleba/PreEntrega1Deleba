import { useState, useEffect } from "react"
import { getProductsById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState(null)
    

    const {itemId} = useParams()

    useEffect(() =>{
        getProductsById(itemId)
            .then(result =>{
                setProduct(result)

            })
    }, [itemId])

    return (
        <main>
            <h1>Detalle del producto</h1>
            <ItemDetail {...product}/>
        </main>
    )
}

export default ItemDetailContainer
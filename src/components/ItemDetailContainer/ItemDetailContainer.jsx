import { useState, useEffect } from "react"

import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState(null)
    

    const {itemId} = useParams()

    useEffect(() =>{
        const productDoc = doc(db, 'products', itemId)

        getDoc(productDoc)
            .then(queryDocumentSnapshot => {
                console.log(queryDocumentSnapshot)
                const data = queryDocumentSnapshot.data()
                const productAdapted = {id: queryDocumentSnapshot.id, ...data}

                setProduct(productAdapted)
            })
            .catch()

    }, [itemId])

    return (
        <main>
            <h1 style={{color:"white"}}>Detalle del producto</h1>
            <ItemDetail {...product}/>
        </main>
    )
}

export default ItemDetailContainer
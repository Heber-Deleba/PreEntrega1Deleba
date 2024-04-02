
import {useState, useEffect } from "react"

import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import classes from "./ItemListContainer.module.css"

import {getDocs, collection, query, where} from 'firebase/firestore'

import { db } from "../../services/firebase/firebaseConfig"


const ItemListContainer = ({greeting}) =>{
        const [products, setProducts] = useState ([])

        const {categoryId} = useParams()

        const valor = 10

    useEffect(() => {

        const productsCollection = categoryId ? (
            query(collection(db, 'products'), where('category', '==', categoryId))
        ) : (
            collection(db,'products')
        )

        getDocs(productsCollection)
        .then(querySnapShot => {
            
            const productsAdapted = querySnapShot.docs.map (doc => {
                const data = doc.data()

                return{ id: doc.id, ...data}
            })

            setProducts (productsAdapted)
        })
        .catch(() => {
            showNotification ('error', 'hubo un error al cargar los productos')
        })

        //const asyncFunction = categoryId ? getProductsByCategory : getProducts
        
            //asyncFunction(categoryId)
            //.then( result => {
                //setProducts(result)
            //})
            //.catch(error =>{
                //console.log(error)
            //})
        
        
    }, [categoryId])

    

    return(
        
        <div className={classes.div} >
            <h1 style={{color:"white"}}>{greeting}</h1>
            <ItemList products ={products} />
        </div>
        
    )
}

export default ItemListContainer
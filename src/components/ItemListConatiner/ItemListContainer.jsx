
import {useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import classes from "./ItemListContainer.module.css"


const ItemListContainer = ({greeting}) =>{
        const [products, setProducts] = useState ([])

        const {categoryId} = useParams()

        const valor = 10

    useEffect(() => {

        const asyncFunction = categoryId ? getProductsByCategory : getProducts
        
            asyncFunction(categoryId)
            .then( result => {
                setProducts(result)
            })
            .catch(error =>{
                console.log(error)
            })
        
        
    }, [categoryId])

    

    return(
        
        <div className={classes.div} >
            <h1 style={{color:"white"}}>{greeting}</h1>
            <ItemList products ={products} />
        </div>
        
    )
}

export default ItemListContainer
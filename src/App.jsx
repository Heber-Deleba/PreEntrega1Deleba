import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from "./components/ItemListConatiner/ItemListContainer"
import Navbar from "./components/Navbar/Navbar"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './context/CartContext'

const App = () => {
  
  
  return (
    <>
  <CartProvider>
    <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path='/' element={<ItemListContainer greeting={'TODAS LAS CAMISETAS DE LA HISTORIA DEL FUTBOL ESTAN ACA'} />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado de productos filtrados'} />}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        </Routes>
    </BrowserRouter>
  </CartProvider> 
    </>
  )
}

export default App

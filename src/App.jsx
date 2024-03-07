import ItemListContainer from "./components/ItemListConatiner/ItemListContainer"
import Navbar from "./components/Navbar/Navbar"

function App() {
  

  return (
    <>
    <Navbar callback={() => console.log ('hice click en la barra de navegacion')}/>
    <ItemListContainer greeting={'TODAS LAS CAMISETAS DE LA HISTORIA DEL FUTBOL ESTAN ACA'} />
      
      
    </>
  )
}

export default App

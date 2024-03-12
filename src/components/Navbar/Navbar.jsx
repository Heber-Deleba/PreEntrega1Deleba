import CartWidget from "../CartWidget/CartWidget"
import classes from "./Navbar.module.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
        <header className={classes.header}>
            <h4>SAO<span>K</span>O</h4>
            <nav>
                <Link to='/category/ligaespanola'>Liga Espanola</Link>
                <Link to='/category/ligaitaliana'>Liga Italiana</Link>
                <Link to='/category/ligafrancesa'>Liga Francesa</Link>
                
            </nav>
            <CartWidget className='btn btn-danger'/>
        </header>


        </>
    )
}

export default Navbar
import CartWidget from "../CartWidget/CartWidget"
import classes from "./Navbar.module.css"


const Navbar = (props) => {
    return (
        <>
        <header className={classes.header}>
            <h4>SAO<span>K</span>O</h4>
            <nav>
                <a onClick={props.callback}>Destacados</a>
                <a onClick={props.callback}>Novedades</a>
                <a onClick={props.callback}>Registrarse</a>
            </nav>
            <CartWidget className='btn btn-danger'/>
        </header>


        </>
    )
}

export default Navbar
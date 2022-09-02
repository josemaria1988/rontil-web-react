
import React from 'react'
import './NavBar.scss'
import logo from '../../assets/img/logo.png'
import CartWidget from '../CartWidget/CartWidget.jsx'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
    <header className="navHeader">
        <nav className="navBar">
            <Link to='/'><img src={logo} alt="logo" className="logo"></img></Link>
            <ul className="ulNav">
                <li className="nav-menu-item"><Link to="/" className="nav-link">Inicio</Link></li>
                <li className="nav-menu-item"><Link to='/productos' className="nav-link">Productos</Link></li>
                <li className="nav-menu-item"><Link to='/nosotros' className="nav-link">Nosotros</Link></li>
                <li className="nav-menu-item"><Link to='/contacto' className="nav-link">Contacto</Link></li>
            </ul>
            {/* Agregamos el CartWidget al nav */}
            <CartWidget/>
        </nav>
       
    </header>
)
}

export default Navbar
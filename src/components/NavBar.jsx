import React from 'react'
import './NavBar.css'
import logo from '../assets/img/logo.png'

const Navbar = () => {
    return (
    <header className="navHeader">
        <nav className="navBar">
            <a href="#"><img src={logo} alt="logo" className="logo"></img></a>
            <ul className="ulNav">
                <li className="nav-menu-item"><a href="#" className="nav-link">Inicio</a></li>
                <li className="nav-menu-item"><a href="#" className="nav-link">Productos</a></li>
                <li className="nav-menu-item"><a href="#" className="nav-link">Contacto</a></li>
            </ul>
        </nav>
    </header>
)
}

export default Navbar
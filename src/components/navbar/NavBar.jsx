
import React from 'react'
import './NavBar.scss'
import logo from '../../assets/img/logo.png'
import CartWidget from '../CartWidget/CartWidget.jsx'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <header className="navHeader">
            <nav className="navBar">

                <Link to='/'><img src={logo} alt="logo" className="logo"></img></Link>

                <ul className={`ulNav ${openMenu && "open"}`}>
                    <li className="nav-menu-item"><Link to="/" className="nav-link">Inicio</Link></li>
                    <li className="nav-menu-item">
                        <div className="dropdown">
                            <Link to='/' className="nav-link dropbtn">Productos</Link>
                            <div className="dropdown-content">
                                <Link to='/productos/Contenedores' className="dropdown-link nav-link">Contenedores</Link>
                                <Link to='/productos/Papeleras' className="dropdown-link nav-link">Papeleras</Link>
                                <Link to='/productos/Compostaje' className="dropdown-link nav-link">Compostaje</Link>
                                <Link to='/productos/Dispensadores' className="dropdown-link nav-link">Dispensadores</Link>
                                <Link to='/productos/Repuestos' className="dropdown-link nav-link">Repuestos</Link>
                            </div>
                        </div>
                    </li>

                    <li className="nav-menu-item"><Link to='/nosotros' className="nav-link">Nosotros</Link></li>
                    <li className="nav-menu-item"><Link to='/contacto' className="nav-link">Contacto</Link></li>
                    <li className="nav-menu-item"><Link to='/cart'> <CartWidget /> </Link></li>
                </ul>
                <div className={`nav-toggle ${openMenu && "open"}`} onClick={() => setOpenMenu(openMenu)}>
                    <div className="nav-btn"><MenuIcon /></div>
                </div>
                {/* Agregamos el CartWidget al nav */}
            </nav>

        </header>
    )
}

export default Navbar
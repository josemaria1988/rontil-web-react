
import React from 'react'
import './NavBar.scss'
import logo from '../../assets/img/logo.png'
import CartWidget from '../CartWidget/CartWidget.jsx'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useLoginContext } from '../../Context/LoginContext'


const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const {user, logout} = useLoginContext()
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
                    <li className="nav-menu-item"><Link to='/login' className="nav-link">Login</Link></li>
                    <li className="nav-menu-item"><Link to='/cart' className="nav-link-cart"> <CartWidget /> </Link></li>

                    {
                        user ? <li className="nav-menu-item"><Link to="/usuario" className="nav-link">{user.user}</Link><button onClick={logout}>Logout</button></li> : ""
                    }
                </ul>
                <div className={`nav-toggle ${openMenu && "open"}`} onClick={() => setOpenMenu(openMenu)}>
                    <div className="nav-btn"><MenuIcon /></div>
                </div>
            </nav>
           

        </header>
    )
}

export default Navbar
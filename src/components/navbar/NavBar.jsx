
import React from 'react'
import './NavBar.scss'
import logo from '../../assets/img/logo.png'
import CartWidget from '../CartWidget/CartWidget.jsx'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useLoginContext } from '../../Context/LoginContext'
import LogoutIcon from '@mui/icons-material/Logout';


const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const { activeUser, logout } = useLoginContext()
    return (
        <header className="navHeader">
            <nav className="navBar">

                <Link to='/'><img src={logo} alt="logo" className="logo"></img></Link>

                <ul className={`ulNav ${openMenu && "open"}`}>
                    <li className="nav-menu-item"><Link to="/" className="nav-link">Inicio</Link></li>
                    <li className="nav-menu-item">
                        <div className="dropdown">
                            <Link to='/' className="nav-link dropbtn">Tienda en Línea</Link>
                            <div className="dropdown-content">
                                <Link to='/productos/Contenedores' className="dropdown-link nav-link">Contenedores</Link>
                                <Link to='/productos/Papelera' className="dropdown-link nav-link">Papeleras</Link>
                                <Link to='/productos/Compostaje' className="dropdown-link nav-link">Compostaje</Link>
                                <Link to='/productos/Dispensadores' className="dropdown-link nav-link">Dispensadores</Link>
                                <Link to='/productos/Repuestos' className="dropdown-link nav-link">Repuestos</Link>
                            </div>
                        </div>
                    </li>

                    <li className="nav-menu-item"><Link to='/nosotros' className="nav-link">Nosotros</Link></li>
                    <li className="nav-menu-item"><Link to='/contacto' className="nav-link">Contacto</Link></li>

                    {
                        activeUser ?

                            <li className="nav-menu-item">
                                <div className="dropdown">
                                    <Link to="/usuario" className="nav-link dropbtn">
                                        {
                                            activeUser.photoURL ? <img className="nav-user-photo"src={activeUser.photoURL} alt="photoURL"/> : <img className="nav-user-photo" src="https://adscvcongreso2022.onsitevents.com/assets/imgs/default/default-logo.jpg" alt="photoURL"/> } {activeUser.displayName}</Link>
                                    <div className="dropdown-content">
                                        <Link to="/usuario" className="dropdown-link nav-link">Mi Perfil</Link>
                                        <Link to='/' onClick={logout} className="dropdown-link nav-link">LOGOUT - <LogoutIcon/></Link>
                                    </div>
                                </div>
                            </li>

                            :

                            <li className="nav-menu-item"><Link to='/login' className="nav-link">Login</Link></li>
                    }
                    <li className="nav-menu-item"><Link to='/cart' className="nav-link-cart"> <CartWidget /> </Link></li>

                </ul>
                <div className={`nav-toggle ${openMenu && "open"}`} onClick={() => setOpenMenu(openMenu)}>
                    <div className="nav-btn"><MenuIcon /></div>
                </div>
            </nav>


        </header>
    )
}

export default Navbar
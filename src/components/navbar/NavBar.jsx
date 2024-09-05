
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

    const handleMenuClick = () => {
        setOpenMenu(false);
    }
    return (
        <header className="navHeader">
            <nav className="navBar">

                <Link to='/'><img src={logo} alt="logo" className="logo"></img></Link>

                <ul className={`ulNav ${openMenu && "open"}`}>
                    <li className="nav-menu-item"><Link to="/" className="nav-link" onClick={handleMenuClick}>Inicio</Link></li>
                    <li className="nav-menu-item">
                        <div className="dropdown">
                        <Link to='/productos' className="nav-link dropbtn">Tienda en Línea</Link>
        <div className="dropdown-content grid-dropdown">
            <div className="dropdown-column">
                <h4>Medio Ambiente</h4>
                <Link to='/productos/Compactadores' className='dropdown-link nav-link' onClick={handleMenuClick}>Compactadores</Link>
                <Link to='/productos/Contenedores' className="dropdown-link nav-link" onClick={handleMenuClick}>Contenedores</Link>
                <Link to='/productos/Papelera' className="dropdown-link nav-link" onClick={handleMenuClick}>Papeleras</Link>
                <Link to='/productos/Compostaje' className="dropdown-link nav-link" onClick={handleMenuClick}>Compostaje</Link>
                <Link to='/productos/Dispensadores' className="dropdown-link nav-link" onClick={handleMenuClick}>Dispensadores</Link>
            </div>
            <div className="dropdown-column">
                <h4>Agroindustria</h4>
                <Link to='/productos/Maquinaria' className="dropdown-link nav-link" onClick={handleMenuClick}>Maquinaria</Link>
                <Link to='/productos/Silos' className='dropdown-link nav-link' onClick={handleMenuClick}>Silos</Link>
                <Link to='/productos/Canalizacion' className='dropdown-link nav-link' onClick={handleMenuClick}>Canalización</Link>
                <Link to='/productos/Repuestos' className="dropdown-link nav-link" onClick={handleMenuClick}>Repuestos</Link>
                <Link to='/productos/Herramientas' className="dropdown-link nav-link" onClick={handleMenuClick}>Herramientas</Link>
            </div>
        </div>
    </div>
</li>

                    <li className="nav-menu-item"><Link to='/nosotros' className="nav-link" onClick={handleMenuClick}>Nosotros</Link></li>
                    <li className="nav-menu-item"><Link to='/contacto' className="nav-link" onClick={handleMenuClick}>Contacto</Link></li>

                    {
                        activeUser ?

                            <li className="nav-menu-item">
                                <div className="dropdown">
                                    <Link to="/usuario" className="nav-link dropbtn" onClick={handleMenuClick}>
                                        {
                                            activeUser.photoURL ? <img className="nav-user-photo" src={activeUser.photoURL} alt="photoURL" /> : <img className="nav-user-photo" src="https://adscvcongreso2022.onsitevents.com/assets/imgs/default/default-logo.jpg" alt="photoURL" />} {activeUser.displayName}</Link>
                                    <div className="dropdown-content">
                                        <Link to="/usuario" className="dropdown-link nav-link" onClick={handleMenuClick}>Mi Perfil</Link>
                                        <Link to='/' onClick={() => {handleMenuClick(); logout();}} className="dropdown-link nav-link">LOGOUT - <LogoutIcon /></Link>
                                    </div>
                                </div>
                            </li>

                            :

                            <li className="nav-menu-item"><Link to='/login' className="nav-link" onClick={handleMenuClick}>Login</Link></li>
                    }
                    <li className="nav-menu-item"><Link to='/cart' className="nav-link-cart" onClick={handleMenuClick}> <CartWidget /> </Link></li>

                </ul>
                <div className={`nav-toggle ${openMenu && "open"}`} onClick={() => setOpenMenu(!openMenu)}>
                    <div className="nav-btn"><MenuIcon /></div>
                </div>
            </nav>


        </header>
    )
}

export default Navbar
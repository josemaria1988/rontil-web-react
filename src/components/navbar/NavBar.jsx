
import React from 'react'
import './NavBar.scss'
import logo from '../../assets/img/logo.png'
import CartWidget from '../CartWidget/CartWidget.jsx'
import {Link} from 'react-router-dom';
import {useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
    <header className="navHeader">
        <nav className="navBar">
            
                <Link to='/'><img src={logo} alt="logo" className="logo"></img></Link>
            
            <ul className={`ulNav ${isOpen && "open"}`}>
                <li className="nav-menu-item"><Link to="/" className="nav-link">Inicio</Link></li>
                <li className="nav-menu-item"><Link to='/productos' className="nav-link">Productos</Link></li>
                <li className="nav-menu-item"><Link to='/nosotros' className="nav-link">Nosotros</Link></li>
                <li className="nav-menu-item"><Link to='/contacto' className="nav-link">Contacto</Link></li>
            </ul>
            <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(isOpen)}>
                <div className="nav-btn"><MenuIcon/></div>
            </div>
            {/* Agregamos el CartWidget al nav */}
            <CartWidget/>
        </nav>
       
    </header>
)
}

export default Navbar
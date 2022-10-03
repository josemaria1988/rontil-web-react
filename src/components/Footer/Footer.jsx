import React from 'react'
import './Footer.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png'
import { useLoginContext } from '../../Context/LoginContext';

const Footer = () => {

    const { activeUser } = useLoginContext()

    return (
        <>
            <hr/>
            <footer className="footer-container">
                <img src={logo} alt="" className="footer-logo"/>

                <div className="social-icons-container">
                    <a className="social-media-link" href="https://www.facebook.com"><FacebookIcon sx={{ fontSize: 50 }}/></a>
                    <a className="social-media-link" href="https://www.instagram.com"><InstagramIcon sx={{ fontSize: 50 }}/></a>
                    <a className="social-media-link" href="https://www.twitter.com"><TwitterIcon sx={{ fontSize: 50 }}/></a>
                    <a className="social-media-link" href="https://www.linkedin.com"><LinkedInIcon sx={{ fontSize: 50 }}/></a>
                </div>

            <ul className="footer-menu-container">
                <li><Link className="menu-footer-link" to="/">Inicio</Link></li>
                <li><Link className="menu-footer-link" to="/">Productos</Link></li>
                <li><Link className="menu-footer-link" to="/nosotros">Nosotros</Link></li>
                <li><Link className="menu-footer-link" to="/contacto">Contacto</Link></li>
                {
                    activeUser ?
                    <li><Link className="menu-footer-link" to="/usuario">Perfil</Link></li>
                    :
                    ''
                }
            </ul>
            <span className="copyright">2022, José María Sosa. All rights reserved.</span>
                
                
            </footer>
        </>
    )
}

export default Footer
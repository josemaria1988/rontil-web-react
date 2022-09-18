import React from 'react';
import './Login.scss'


const Login = () => {

    
    return (
        <div className="login-container">

            <h2 className="login-titulo">Iniciar Sesión</h2>

            <form className="login-form">
                <input type="email" className="login-input" placeholder="email"/>
                <input type="password" className="login-input" placeholder="password"/>
                <button className="login-submit" value="Aceptar">Confirmar </button>
            </form>
            <div>
                <h4>Aun no estás registrado?</h4>
                <button>Registrarse</button>
            </div>
        </div>
    )
}

export default Login
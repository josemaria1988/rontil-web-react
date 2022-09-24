import React, { useRef } from 'react';
import './Login.scss';
import { useLoginContext } from '../../Context/LoginContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/config';



const Login = () => {

    const emailRef = useRef(null)
    const passRef = useRef(null)

    const {activeUser} = useLoginContext()

    const handleSignUp = (e) => {
        e.preventDefault()

        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passRef.current.value
        ).then(user => {
            activeUser(user)
        }).catch(error => {
            console.log(error)
        })
    }

    const handleSignIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passRef.current.value
        ).then(user => {
            activeUser(user)
        }).catch(error => {
            console.log(error)
        })
    }
    
    return (
        <div className="login-container">

            <h2 className="login-titulo">Iniciar Sesión</h2>

            <form className="login-form">
                <input ref={emailRef} type="email" className="login-input" placeholder="email"/>
                <input ref={passRef} type="password" className="login-input" placeholder="password"/>
                <button onClick={() => handleSignIn(emailRef, passRef)} className="login-submit" value="Aceptar">Sign in </button>
            </form>
            <div>
                <h4>Aun no estás registrado?</h4>
                <button onClick={()=> handleSignUp(emailRef, passRef)}>Sign up</button>
            </div>
        </div>
    )
}

export default Login
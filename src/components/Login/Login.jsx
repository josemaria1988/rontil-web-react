import React, { useRef } from 'react';
import './Login.scss';
import { useLoginContext } from '../../Context/LoginContext';
import { auth } from '../../Firebase/config';
import { useNavigate } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';



const Login = (fromCheckout) => {

    const emailRef = useRef(null)
    const passRef = useRef(null)
    const navigate = useNavigate()

    const { signIn, signUp, errorMessage, loading } = useLoginContext()

    const handleSignIn = async (e) => {
        e.preventDefault()
        try {
            await signIn(auth, emailRef.current.value, passRef.current.value)
        }catch(errorMessage) {
            console.log(errorMessage)
        }finally {
            if(fromCheckout) {
                navigate("/checkout")
            }else {
                navigate("/")
            }
        }
    }

    const handleSignUp = async (e) => {
            e.preventDefault()
            try {
                await signUp(auth, emailRef.current.value, passRef.current.value)
            }catch(errorMessage){
                console.log(errorMessage)
            }finally {
                if(fromCheckout) {
                    navigate("/checkout")
                }else {
                    navigate("/")
                }
            }
        }
    

    return (
        <>
                <div className="login-container">

                {
                loading 
                ?
                 <div className="spinner" ><MoonLoader /> </div>
                :
                <div>
                    <h2 className="login-titulo">Iniciar Sesión / Registrarse</h2>
                    <form className="login-form">
                        <input ref={emailRef} type="email" className="login-input" placeholder="email" />
                        <input ref={passRef} type="password" className="login-input" placeholder="password" />
                        <button onClick={handleSignIn} className="login-submit-login" value="Aceptar">Iniciar sesión </button>
                        <button onClick={handleSignUp} className="login-submit-registro" value="Aceptar">Registrarse</button>
                    { errorMessage && <p className="error-message">{errorMessage}</p>}
                    </form>
                    </div>
                }
                </div>
        </>
    )
}

export default Login
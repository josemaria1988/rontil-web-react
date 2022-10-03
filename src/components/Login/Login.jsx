import React, { useRef, useState } from 'react';
import './Login.scss';
import { useLoginContext } from '../../Context/LoginContext';
import { auth } from '../../Firebase/config';
import { useNavigate } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';



const Login = () => {

    const emailRef = useRef(null)
    const passRef = useRef(null)
    const [loading, setLoading] = useState()
    const navigate = useNavigate()

    const { signIn, signUp, errorMessage } = useLoginContext()

    const handleSignIn = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            await signIn(auth, emailRef.current.value, passRef.current.value)
            setLoading(false)
        }catch(errorMessage) {
            console.log(errorMessage)
        }finally {
            navigate("/")
        }
    }

    const handleSignUp = async (e) => {
            e.preventDefault()
            setLoading(true)
            try {
                await signUp(auth, emailRef.current.value, passRef.current.value)
                setLoading(false)
            }catch(errorMessage){
                console.log(errorMessage)
            }finally {
                navigate("/")
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

                    {errorMessage && <p className="error-message">{errorMessage}</p>}

                    <form className="login-form">
                        <input ref={emailRef} type="email" className="login-input" placeholder="email" />
                        <input ref={passRef} type="password" className="login-input" placeholder="password" />
                        <button onClick={handleSignIn} className="login-submit-login" value="Aceptar">Iniciar sesión </button>
                        <button onClick={handleSignUp} className="login-submit-registro" value="Aceptar">Registrarse</button>
                    </form>
                    </div>
                }
                </div>
        </>
    )
}

export default Login
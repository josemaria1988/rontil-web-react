import React, { useRef, useState } from 'react';
import './Login.scss';
import { useLoginContext } from '../../Context/LoginContext';
import { auth } from '../../Firebase/config';
import { useNavigate } from 'react-router-dom';
import MoonLoader from 'react-spinners/MoonLoader';



const Login = (prop) => {

    const navigate = useNavigate()
    const emailRef = useRef(null)
    const passRef = useRef(null)
    const [loading, setLoading] = useState(false)

    const { signIn, signUp } = useLoginContext()

    const handleSignIn = async (e) => {
        e.preventDefault()
            try {
                await signIn(auth, emailRef.current.value, passRef.current.value)
                setLoading(true)
                navigate("/")
                console.log(auth.currentUser)
            }catch(error){
                console.log(error)
            }finally{
                setLoading(false)
            }
    }

    const handleSignUp = async (e) => {
            e.preventDefault()
            try {
                await signUp(auth, emailRef.current.value, passRef.current.value)
                setLoading(true)
                navigate("/")
            }catch(error){
                console.log(auth.currentUser)
            }finally {
                if(prop){
                    navigate('/checkout')
                }
                setLoading(false)
            }
        }
    

    return (
        <>
            {loading ? <div className="spinner" ><MoonLoader /> </div>
                :
                <div className="login-container">


                    <h2 className="login-titulo">Iniciar Sesión / Registrarse</h2>

                    <form className="login-form">
                        <input ref={emailRef} type="email" className="login-input" placeholder="email" />
                        <input ref={passRef} type="password" className="login-input" placeholder="password" />
                        <button onClick={handleSignIn} className="login-submit-login" value="Aceptar">Iniciar sesión </button>
                        <button onClick={handleSignUp} className="login-submit-registro" value="Aceptar">Registrarse</button>
                    </form>
                </div>
            }
        </>
    )
}

export default Login
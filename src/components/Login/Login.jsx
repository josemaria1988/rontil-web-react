import React, { useRef, useState } from 'react';
import './Login.scss';
import { useLoginContext } from '../../Context/LoginContext';
import { auth } from '../../Firebase/config';
import { useNavigate } from 'react-router-dom';
import MoonLoader from 'react-spinners/MoonLoader';



const Login = () => {

    const navigate = useNavigate()
    const emailRef = useRef(null)
    const passRef = useRef(null)
    const [loading, setLoading] = useState(false)

    const { signIn } = useLoginContext()

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

    return (
        <>
            {loading ? <div className="spinner" ><MoonLoader /> </div>
                :
                <div className="login-container">


                    <h2 className="login-titulo">Iniciar Sesión</h2>

                    <form className="login-form">
                        <input ref={emailRef} type="email" className="login-input" placeholder="email" />
                        <input ref={passRef} type="password" className="login-input" placeholder="password" />
                        <button onClick={handleSignIn} className="login-submit" value="Aceptar">Sign in </button>
                    </form>
                </div>
            }
        </>
    )
}

export default Login
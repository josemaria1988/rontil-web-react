import React, { useRef } from 'react';
import './Login.scss';
import { useLoginContext } from '../../Context/LoginContext';
import { auth } from '../../Firebase/config';
import { useNavigate } from 'react-router-dom';
import { MoonLoader } from 'react-spinners';
import { useForm } from '../../hooks/useForm';



const Login = () => {

    const emailRef = useRef(null)
    const passRef = useRef(null)
    const navigate = useNavigate()

    const { signIn, signUp, errorMessage, loading, loginCart } = useLoginContext()
    const { values, handleInputChange } = useForm({
        displayName: '' ,
        phoneNumber: '',
        fotoURL: '',
        email: '',
        password: '',

    })

    const handleSignIn = async (e) => {
        e.preventDefault()
        try {
            await signIn(auth, emailRef.current.value, passRef.current.value)
        }catch(errorMessage) {
            console.log(errorMessage)
        }finally {
            if(loginCart) {
                navigate("/checkout")
            }else {
                navigate("/")
            }
        }
    }

    const handleSignUp = async (e) => {
            e.preventDefault()
            try {
                await signUp(auth, values.displayName, values.phoneNumber, values.fotoURL, values.email, values.password)
            }catch(errorMessage){
                console.log(errorMessage)
            }finally {
                if(loginCart) {
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
                    <h2 className="login-titulo">Iniciar Sesión</h2>
                    <form className="login-form">
                    <label className="login-label" htmlFor="email">Correo electrónico: </label>
                        <input ref={emailRef} type="email" className="login-input" placeholder="email" />
                        <label className="login-label" htmlFor="password">Contraseña: </label>
                        <input ref={passRef} type="password" className="login-input" placeholder="password" />
                        <button onClick={handleSignIn} className="login-submit-login" value="Aceptar">Iniciar sesión </button>
                    { errorMessage && <p className="error-message">{errorMessage}</p>}
                    </form>

                    <h2 className="login-titulo">Registrarse</h2>
                    <form className="login-form">
                        <label className="login-label" htmlFor="nombre">Nombre de Usuario: </label>
                        <input id="nombre" onChange={handleInputChange} name="displayName" type={"displayName"} value={values.displayName} className="login-input" placeholder="nombre"/>
                        <label className="login-label" htmlFor="phoneNumber">Número de Teléfono: </label>
                        <input id="phoneNumber" onChange={handleInputChange} name="phoneNumber" type={"phoneNumber"} value={values.phoneNumber} className="login-input" placeholder="Número de Teléfono"/>
                        <label className="login-label" htmlFor="fotoURL">OPCIONAL! Foto de perfil: </label>
                        <input id="fotoURL" onChange={handleInputChange} name="fotoURL" type={"fotoURL"} value={values.fotoURL} className="login-input" placeholder="introduce URL de tu foto de perfil"/>
                        <label className="login-label" htmlFor="email">Correo electrónico: </label>
                        <input id="email" onChange={handleInputChange} name="email" type={"email"} value={values.email} className="login-input" placeholder="email" />
                        <label className="login-label" htmlFor="password">Contraseña: </label>
                        <input id="password" onChange={handleInputChange} name="password" type={"password"} value={values.password} className="login-input" placeholder="password" />
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
import React, { useState } from 'react'
import { useLoginContext } from '../../Context/LoginContext'
import { Navigate } from 'react-router-dom'
import './Registro.scss'

const Registro = () => {

const [user, setUser] = useState({
    email: '',
    password: ''
})

const [error, setError] = useState()

const { signUp } = useLoginContext()

const handleChange = ({target: {name, value}}) => {
    setUser({...user, [name]: value})
    console.log(user)
}

const handleSubmit = async (e) => {
    e.preventDefault()
    try {
       await signUp(user.email, user.password)
       Navigate("/")
    }catch (error){
        setError(error.message)
    }
}

    return (
        <div className="body-registro">
            {error && <p>{error}</p>}

            <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input 
                type="email" 
                name="email"
                placeholder="tu_email@company.ltd"
                onChange={handleChange}/>

            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                name="password"
                id="password" />

            <button>Confirmar registro</button>
        </form>
        </div>
    )
}

export default Registro
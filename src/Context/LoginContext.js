import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Firebase/config";


export const LoginContext = createContext()

export const LoginProvider = ({children}) => {

    const [activeUser, setActiveUser] = useState(null)
    const [errorMessage, setError] = useState()
    const [loading, setLoading] = useState(false)
    
    const signUp = (auth, email, password) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            setLoading(false)
        })
        .catch((error) => {
            setError(error.message)
            setLoading(false)
        })
    }

    const signIn = (auth, email, password) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then (() => {
            setLoading(false)
        })
        .catch((error) => {
            setError(error.message)
        })
    }

    const logout = () => {
        signOut(auth)
    }
  
    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setActiveUser(currentUser)
        })
    }, [])


    return (
        <LoginContext.Provider value={{activeUser, signUp, signIn, logout, errorMessage, loading}}>
            {children}
        </LoginContext.Provider>
    )
}


export const useLoginContext = () => {
    return useContext(LoginContext)
}
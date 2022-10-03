import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Firebase/config";


export const LoginContext = createContext()

export const LoginProvider = ({children}) => {

    const [activeUser, setActiveUser] = useState(null)
    const [errorMessage, setError] = useState()
    
    const signUp = (auth, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            setError(error.message)
        })
    }

    const signIn = (auth, email, password) => {
        signInWithEmailAndPassword(auth, email, password)
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
        <LoginContext.Provider value={{activeUser, signUp, signIn, logout, errorMessage}}>
            {children}
        </LoginContext.Provider>
    )
}


export const useLoginContext = () => {
    return useContext(LoginContext)
}
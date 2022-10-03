import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Firebase/config";


export const LoginContext = createContext()

export const LoginProvider = ({children}) => {

    const [activeUser, setActiveUser] = useState(null)
    
    const signUp = (auth, email, password) => {
        createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (auth, email, password) => {
        signInWithEmailAndPassword(auth, email, password);
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
        <LoginContext.Provider value={{activeUser, signUp, signIn, logout}}>
            {children}
        </LoginContext.Provider>
    )
}


export const useLoginContext = () => {
    return useContext(LoginContext)
}
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Firebase/config";


export const LoginContext = createContext()

export const LoginProvider = ({children}) => {

    const [activeUser, setActiveUser] = useState(null)
    const [errorMessage, setError] = useState()
    const [loading, setLoading] = useState(false)
    const [loginCart, setLoginCart] = useState(false)
    
    const signUp = (auth, displayName, phoneNumber, photoURL, email, password) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            setLoading(false)
            updateProfile(auth.currentUser, {
                displayName: displayName, phoneNumber: phoneNumber, photoURL: photoURL})
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
            setLoading(false)
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

    const updateUserProfile = (name, fotoURL) => {

        updateProfile(activeUser, {
            displayName: name, photoURL: fotoURL
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            console.log(error.message)
          });
    }


    return (
        <LoginContext.Provider value={{activeUser, signUp, signIn, logout, errorMessage, loading, loginCart, setLoginCart, updateUserProfile}}>
            {children}
        </LoginContext.Provider>
    )
}


export const useLoginContext = () => {
    return useContext(LoginContext)
}
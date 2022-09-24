import { createContext, useContext } from "react";


export const LoginContext = createContext()

export const LoginProvider = ({children}) => {

    const activeUser = (user) => {
        const client = {
            nombre: user.displayName,
            email: user.email,
            photo: user.photoURL,
            emailVerified: user.emailVerified,
            uid: user.uid,
            logged: true
        }
        return client
    }

  


    return (
        <LoginContext.Provider value={{activeUser}}>
            {children}
        </LoginContext.Provider>
    )
}


export const useLoginContext = () => {
    return useContext(LoginContext)
}
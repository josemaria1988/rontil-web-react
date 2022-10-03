import { BrowserRouter } from "react-router-dom"
import { useLoginContext } from "../Context/LoginContext"
import PrivateRoutes from "./PrivateRoutes"
import PublicRoutes from "./PublicRoutes"




const AppRouter = () => {

    const {activeUser} = useLoginContext()

    return (
        <BrowserRouter>
            {
            activeUser
                ? <PrivateRoutes/>
                : <PublicRoutes/>
            }
        </BrowserRouter>
    )
}

export default AppRouter
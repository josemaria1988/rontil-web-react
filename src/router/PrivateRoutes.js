import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/navbar/NavBar'
import Footer from '../components/Footer/Footer'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import Nosotros from '../components/Nosotros/Nosotros'
import Contacto from '../components/Contacto/Contacto'
import Cart from '../components/Cart/Cart'
import Profile from '../components/Profile/Profile'
import Checkout from '../components/Checkout/Checkout'

const PrivateRoutes = () => {

    return (
        <>
            <Navbar />
            <Routes>

                <Route path='/' element={<ItemListContainer />} />
                <Route path='/productos/:categoryId' element={<ItemListContainer />} />
                <Route path='/nosotros' element={<Nosotros />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
                <Route path='/usuario' element={<Profile/>} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout/>}/>

            </Routes>
            <Footer />
        </>
    )
}

export default PrivateRoutes
import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/navbar/NavBar'
import Footer from '../components/Footer/Footer'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import Nosotros from '../components/Nosotros/Nosotros'
import Contacto from '../components/Contacto/Contacto'
import Cart from '../components/Cart/Cart'

const PublicRoutes = () => {

    return (
        <>
            <Navbar />
            <Routes>

                <Route path='/' element={<ItemListContainer />} />
                <Route path='/productos/:categoryId' element={<ItemListContainer />} />
                <Route path='/nosotros' element={<Nosotros />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />

            </Routes>
            <Footer />
        </>
    )
}

export default PublicRoutes
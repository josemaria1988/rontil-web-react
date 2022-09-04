import './App.scss';
import Navbar from './components/navbar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import Contacto from './components/Contacto/Contacto.jsx'
import Nosotros from './components/Nosotros/Nosotros.jsx'
import Footer from './components/Footer/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  return (

      <BrowserRouter>
          <Navbar/>
        <Routes>

          <Route path='/' element={ <ItemListContainer/> }/>
          <Route path='/productos' element={<ItemListContainer/> } />
          <Route path='/nosotros' element={<Nosotros/>} />
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/detail/:itemId' element={<ItemDetailContainer/>} />
                  
        </Routes>
        
          
        
          <Footer /> 
      </BrowserRouter>
  );
}

export default App;

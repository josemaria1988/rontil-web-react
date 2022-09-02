import './App.scss';
import Navbar from './components/navbar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import Contacto from './components/Contacto/Contacto.jsx'
import Nosotros from './components/Nosotros/Nosotros.jsx'
import Footer from './components/Footer/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  return (

    <div>
      <BrowserRouter>    
          <Navbar />
        <Routes>
          <Route path='/' element={ <ItemListContainer/> }/>
          <Route path='/productos' element={<ItemListContainer/> } />
          <Route path='/nosotros' element={<Nosotros/>} />
          <Route path='/contacto' element={<Contacto/>}/>
          
        
        </Routes>
        
          
        
          <Footer /> 
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.scss';
import Navbar from './components/navbar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import Footer from './components/Footer/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  return (

    <div>
      <BrowserRouter>    
          <Navbar />
        <Routes>
          <Route path='/' element={ <ItemListContainer/> }/>
        
        </Routes>
        
          
        
          <Footer /> 
      </BrowserRouter>
    </div>
  );
}

export default App;

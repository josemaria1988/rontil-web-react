import './App.css';
import Navbar from './components/navbar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import Banner from './components/Banner/Banner.jsx'
import './App.scss';
import Navbar from './components/navbar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import Banner from './components/Banner/Banner.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <Banner/>
      <ItemListContainer/>
=======
      <ItemListContainer usuario="Desconocido"/>

      <Footer />
     
    </div>
  );
}

export default App;

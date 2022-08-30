import './App.scss';
import Navbar from './components/navbar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import Banner from './components/Banner/Banner.jsx';
import Footer from './components/Footer/Footer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Banner/>
      <ItemListContainer/>

      <Footer />


      <ItemDetailContainer/>
     
    </div>
  );
}

export default App;

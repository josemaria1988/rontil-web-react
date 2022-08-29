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

      <Footer />
     
    </div>
  );
}

export default App;

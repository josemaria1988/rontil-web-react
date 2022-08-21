import './App.css';
import Navbar from './components/navbar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import Banner from './components/Banner/Banner.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <Banner/>
      <ItemListContainer/>
     
    </div>
  );
}

export default App;

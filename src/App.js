import './App.scss';
import { CartProvider } from './Context/CartContext';
import { LoginProvider } from './Context/LoginContext';
import { SearchProvider } from './Context/SearchContext';
import AppRouter from './router/AppRouter';


const App = () => {

  return (
    <LoginProvider>
      <CartProvider>
        <SearchProvider>
          <AppRouter />
        </SearchProvider>
      </CartProvider>
    </LoginProvider>
  );
}

export default App;

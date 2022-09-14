import './App.scss';
import { CartProvider } from './Context/CartContext';
import { LoginProvider } from './Context/LoginContext';
import AppRouter from './router/AppRouter';


const App = () => {

  return (
    <LoginProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </LoginProvider>
  );
}

export default App;

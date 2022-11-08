import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../hooks/useAuth';
import 'material-icons/iconfont/material-icons.css';
import Routes from '../Routes';
import GlobalStyles from '../styles/globalStyles/globalStyles';
import { CartProvider } from '../hooks/useCart';
import { ProductProvider } from '../hooks/useProducts';

export default function App() {
  return (
    <CartProvider>
      <GlobalStyles />
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <Routes />
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    </CartProvider>
  );
}

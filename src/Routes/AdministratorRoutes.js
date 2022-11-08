import { Routes, Route } from 'react-router-dom';
import AddProductPage from '../components/screens/AddProductPage/AddProductPage';
import Cart from '../components/screens/Cart_Page/components';
import HomePage from '../components/screens/Home_Page/HomePage';
import LoginPage from '../components/screens/Login_Page/Login_Page';
import RegisterPage from '../components/screens/Register_Page/RegisterPage';

const AdministratorRoutes = () => (
  <Routes>
    <Route path={'/'} element={<HomePage />} />
    <Route path="/sign-up" element={<RegisterPage />} />
    <Route path="/sign-in" element={<LoginPage />} />
    <Route path="/insert-product" element={<AddProductPage />} />
    <Route path="/cart" element={<Cart />} />
  </Routes>
);
export default AdministratorRoutes;

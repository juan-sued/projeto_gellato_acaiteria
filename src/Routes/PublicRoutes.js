import { Routes, Route } from 'react-router-dom';
import Cart from '../components/screens/Cart_Page/components';

import HomePage from '../components/screens/Home_Page/HomePage';
import LoginPage from '../components/screens/Login_Page/Login_Page';
import RegisterPage from '../components/screens/Register_Page/RegisterPage';

const PublicRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/sign-in" element={<LoginPage />} />
    <Route path="/sign-up" element={<RegisterPage />} />
    <Route path="/cart" element={<Cart />} />
  </Routes>
);

export default PublicRoutes;

import { Routes, Route } from 'react-router-dom';

import HomePage from '../components/screens/Home_Page/HomePage';
import LoginPage from '../components/screens/Login_Page/Login_Page';
import RegisterPage from '../components/screens/Register_Page/RegisterPage';

const PublicRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/sign-in" element={<LoginPage />} />
    <Route path="/sign-up" element={<RegisterPage />} />
  </Routes>
);

export default PublicRoutes;

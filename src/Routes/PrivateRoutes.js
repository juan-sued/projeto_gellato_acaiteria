import { Routes, Route } from 'react-router-dom';
import Cart from '../components/screens/Cart_Page/components';
import HomePage from '../components/screens/Home_Page/HomePage';

const PrivateRoutes = () => (
  <Routes>
    <Route path={'/'} element={<HomePage />} />
    <Route path="/cart" element={<Cart />} />
  </Routes>
);
export default PrivateRoutes;
/*

 aqui vão as rotas de myProfile, myOrders



 */

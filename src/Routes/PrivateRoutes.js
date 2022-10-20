import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/screens/Home_Page/HomePage';
import Cart from '../components/shared/Cart';
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

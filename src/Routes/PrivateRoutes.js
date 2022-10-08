import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/screens/Home_Page/HomePage';
const PrivateRoutes = () => (
  <Routes>
    <Route path={'/'} element={<HomePage />} />
  </Routes>
);
export default PrivateRoutes;
/*

 aqui vão as rotas de myProfile, myOrders



 */

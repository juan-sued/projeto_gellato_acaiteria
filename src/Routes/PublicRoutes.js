import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/screens/Home_Page/HomePage';

const PublicRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
  </Routes>
);

export default PublicRoutes;

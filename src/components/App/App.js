import '../../css/reset.css';
import '../../css/styles.css';
//import css

import { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register_Page from '../Register_Page/RegisterPage.js';
import Login_Page from '../Login_Page/Login_Page';
import UserContext from '../../contexts/UserContext';

export default function App() {
  const [objLoginResponse, setObjLoginResponse] = useState({});

  return (
    <UserContext.Provider value={{ objLoginResponse, setObjLoginResponse }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login_Page />} />
          <Route path="/sign-up" element={<Register_Page />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosI from '../services/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storagedUser = localStorage.getItem('TBAuthUser');
    const storagedToken = localStorage.getItem('TBAuthToken');

    if (storagedUser && storagedToken) {
      axiosI.defaults.headers['Authorization'] = `Baerer ${storagedToken}`;
      setUserInfo(JSON.parse(storagedUser));
    }
  }, []);

  const signIn = async (signInData, setStateCollorButton) => {
    setStateCollorButton('#8a8893');

    try {
      const { data } = await axiosI.post('/sign-in', signInData);

      setUserInfo(data.user);

      axiosI.defaults.headers['Authorization'] = `Baerer ${data.token}`;
      localStorage.setItem('TBAuthUser', JSON.stringify(data.user));
      localStorage.setItem('TBAuthToken', data.token);

      navigate('/');
    } catch (err) {
      setStateCollorButton('#e21a27');
    }
  };

  const signOut = () => {
    navigate('/');
    setUserInfo(null);
    localStorage.removeItem('TBAuthUser');
    localStorage.removeItem('TBAuthToken');
  };

  return (
    <AuthContext.Provider
      value={{
        signed: !!userInfo,
        userInfo,
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

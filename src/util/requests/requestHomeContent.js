import axiosI from '../../services/axios';

const requestHomeContent = async (objResponseAPI, setObjResponseAPI, signOut) => {
  try {
    const promisse = await axiosI.get('/home-content');
    if (promisse.status === 200) {
      setObjResponseAPI([...objResponseAPI, promisse.data]);
    }
  } catch (err) {
    if (err.response) {
      if (err.response.status === 401) {
        signOut();
      }
    }
  }
};

export default requestHomeContent;

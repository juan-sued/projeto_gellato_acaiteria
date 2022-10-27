import axiosI from '../../services/axios';

const requestFavoriteds = async (objResponseAPI, setObjResponseAPI, signOut) => {
  try {
    const promisse = await axiosI.get('/favoriteds');
    if (promisse.status === 200) {
      setObjResponseAPI({ ...objResponseAPI, favoriteds: promisse.data });
    }
  } catch (err) {
    if (err.response.status === 401) {
      signOut();
    }
    console.log(err);
  }
};

export default requestFavoriteds;

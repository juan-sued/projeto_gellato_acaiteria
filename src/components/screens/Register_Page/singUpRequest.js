import axiosI from '../../../services/axios';

const signUpRequest = async (signUpData, setStateCollorButton) => {
  setStateCollorButton('#8a8893');
  try {
    await axiosI.post('/sign-up', signUpData);
  } catch (err) {
    console.log(err.response.data);
    setStateCollorButton('#e21a27');
  }
};

export default signUpRequest;

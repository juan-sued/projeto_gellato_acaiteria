import { useNavigate } from 'react-router-dom';
import axiosI from '../../../services/axios';

async function SignUpRequest({ signUpData, setStateCollorButton, setSucess }) {
  setStateCollorButton('#8a8893');
  try {
    console.log(signUpData);
    await axiosI.post('/sign-up', signUpData);
    return true;
  } catch (err) {
    setStateCollorButton('#e21a27');
  }
}

export default SignUpRequest;

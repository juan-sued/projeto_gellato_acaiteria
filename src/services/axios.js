import axios from 'axios';

const axiosI = axios.create({
  baseURL: 'http://localhost:4000'
});

export default axiosI;

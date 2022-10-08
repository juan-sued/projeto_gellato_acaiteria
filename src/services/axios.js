import axios from 'axios';

const axiosI = axios.create({
  baseUrl: 'https://localhost:4000'
});

export default axiosI;

import axios from 'axios';

const axiosI = axios.create({
  baseUrl: 'https://localhost:5000'
});

export default axiosI;

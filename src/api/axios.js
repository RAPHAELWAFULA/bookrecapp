import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://bookrac-backend-kc0z.onrender.com/api/auth',
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
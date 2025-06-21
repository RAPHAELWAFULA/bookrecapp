import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://bookrac-backend-1.onrender.com/api/auth'
, // match backend
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;

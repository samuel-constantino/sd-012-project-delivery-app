import axios from 'axios';

const getToken = () => JSON.parse(localStorage.getItem('token'));

const api = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 50000,
  headers: {},
});

api.interceptors.request.use((req) => {
  const token = getToken();
  req.headers.authorization = `Bearer: ${token}`;
  return req;
});

export default api;

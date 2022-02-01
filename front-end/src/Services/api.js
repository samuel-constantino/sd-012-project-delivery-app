import axios from 'axios';

const getUser = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user;
};

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

api.interceptors.request.use((req) => {
  if (req.url === 'login') return req;
  const user = getUser();
  req.headers.authorization = `Bearer: ${user.token}`;
  return req;
});

export default api;

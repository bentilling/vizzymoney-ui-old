import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/',
});

api.interceptors.request.use((req) => {
  console.log(req);
  return req;
});

export default api;

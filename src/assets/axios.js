import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:3000/data',
});

service.interceptors.response.use(
  response => {
    console.log(response);
    return response;
  },
  error => {
    console.log('api 連接出問題');
    return Promise.reject(error);
  }
);

export default service;
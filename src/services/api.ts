import axios from 'axios';

const token = localStorage.getItem('@memory:token');

const api = axios.create({
 baseURL: 'https://memory-app-back.herokuapp.com/',
 headers: { Authorization: `Bearer ${token}` },
});

export default api;
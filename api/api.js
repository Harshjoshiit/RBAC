import axios from 'axios';

const api = axios.create({ baseURL: '/api' });

export const getUsers = () => api.get('/users');
export const addUser = (user) => api.post('/users', user);
export const getRoles = () => api.get('/roles');
export const addRole = (role) => api.post('/roles', role);

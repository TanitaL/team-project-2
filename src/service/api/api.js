import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://final-project-node-5vh7.onrender.com',
});

export const setToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const deleteToken = () => {
  axios.defaults.headers.common['Authorization'] = '';
};

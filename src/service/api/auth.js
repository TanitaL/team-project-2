import { deleteToken, instance, setToken } from './api';

export const login = async ({ email, password }) => {
  const { data } = await instance.post(`users/login`, { email, password });
  setToken(data.token);
  localStorage.setItem('token', data.token);
  return data;
};

export const refresh = async token => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  const { data } = await instance.get(`users/refresh`);
  setToken(data.token);
  return data;
};

export const logout = async userId => {
  const { data } = await instance.post(`users/logout`, {
    user: { _id: userId },
  });
  deleteToken();
  localStorage.removeItem('token');
  return data;
};
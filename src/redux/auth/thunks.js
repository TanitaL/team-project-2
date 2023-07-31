import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteToken, instance } from 'service/api/api';
import { setToken } from 'service/api/api';

export const austOperationThunk = createAsyncThunk(
  'auth/operations',
  async ({ endpoint, userInfo = {}, urlToken }, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    console.log(endpoint)
    if (
      endpoint === 'register' ||
      endpoint === 'login' ||
      endpoint === 'logout'
    ) {
      try {
        const { data } = await instance.post(`users/${endpoint}`, userInfo);
        if (data.token) {
          setToken(data.token);
        }
        if (endpoint === 'logout') {
          deleteToken();
        }
        return data;
      } catch (error) {
        const { response } = error;
        return thunkAPI.rejectWithValue(response);
      }
    }

    if (endpoint === 'current' && token) {
      setToken(token);
      try {
        const { data } = await instance.get(`users/${endpoint}`);
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
    if (endpoint === 'verify') {
      try {
        const { data } = await instance.get(`users/${endpoint}/${urlToken}`);
        console.log(data);
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  }
);

export const logoutThunk = createAsyncThunk();

import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteToken, instance } from 'service/api/api';
import { setToken } from 'service/api/api';

// **Інструкція використання функції austOperationThunk**

//   Під час виклику функціі треба зробити наступне:
// 1) В функцію ви повинні передати об'єкт з двома ключами
// 2) В цей об'єкт ви повинні обов'язково додати ключ з назвою "endpoint",
//    зі значенням ендпоінту (тип "string") для фетч запиту.
// 3) Також в цей об'єкт можно, але не обов'язково, додати ключ з назвою
//    "userInfo". "userInfo" - це об'єкт, в який можна додати інформаці для
//    POST запитів на бекенд.
// Приклад виклику функції:

//                 dispatch(
//                 austOperationThunk({
//                 endpoint: 'register',
//                 userInfo: {
//                 name,
//                 email,
//                 password,
//                  },
//                  })
//                   );
//

export const austOperationThunk = createAsyncThunk(
  'auth/operations',
  async ({ endpoint, userInfo = {}, urlToken }, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
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

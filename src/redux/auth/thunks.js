import { createAsyncThunk } from '@reduxjs/toolkit';
import { login, logout, refresh } from '../../api/auth';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const data = await login(body);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (token, { rejectWithValue }) => {
    try {
      const data = await refresh(token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (userId, { rejectWithValue }) => {
    try {
      const data = await logout(userId);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

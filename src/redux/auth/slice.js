import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, logoutThunk, refreshThunk } from './thunks';

const fullfiled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
};

const logoutFullfiled = state => {
  state.user = {};
  state.token = '';
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: 'John',
    },
    isLoading: false,
    token: '123',
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, fullfiled)
      .addCase(refreshThunk.fulfilled, fullfiled)
      .addCase(logoutThunk.fulfilled, logoutFullfiled)

      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/fulfilled'), handleFulfilled)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const authReducer = authSlice.reducer;

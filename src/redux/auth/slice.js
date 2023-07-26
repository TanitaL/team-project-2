import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, logoutThunk, refreshThunk, registerThunk } from './thunks';

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
    user: {},
    isLoading: false,
    token: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled)
      .addCase(loginThunk.fulfilled, fullfiled)
      .addCase(refreshThunk.fulfilled, fullfiled)
      .addCase(logoutThunk.fulfilled, logoutFullfiled)

      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/fulfilled'), handleFulfilled)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const authReducer = authSlice.reducer;

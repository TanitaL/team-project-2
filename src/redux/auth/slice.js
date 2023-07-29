import { createSlice } from '@reduxjs/toolkit';
import { austOperationThunk } from './thunks';

const fullfiled = (state, { meta, payload = {} }) => {
  const {
    arg: { endpoint },
  } = meta;
  const { user, token } = payload;
  switch (endpoint) {
    case 'login':
      state.user = user;
      state.token = token;
      break;
    case 'logout':
      state.user = {};
      state.token = '';
      break;
    case 'current':
      state.user = user;
      state.token = token;
      break;
    case 'verify':
      state.token = token;
      break;
    default:
      return;
  }
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload: { data, status } }) => {
  state.isLoading = false;
  state.error = { data, status };
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    isLoading: false,
    token: '',
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(austOperationThunk.fulfilled, fullfiled)

      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/fulfilled'), handleFulfilled)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const authReducer = authSlice.reducer;

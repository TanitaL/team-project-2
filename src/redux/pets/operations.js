import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { instance } from 'service/api/api';

// axios.defaults.baseURL = 'https://final-project-node-5vh7.onrender.com';

export const fetchPets = createAsyncThunk(
  'pets/fetchAll',

  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/notices');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addPet = createAsyncThunk(
  'pets/addPets',
  async (data, thunkAPI) => {
    console.log('🚀 ~ data:', data);
    try {
      const response = await instance.post('/notices', data);
      console.log('🚀 ~ response.data:', response.data);
      return response.data;
    } catch (error) {
      console.log('🚀 ~ error.message:', error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletePet = createAsyncThunk(
  'pets/deletePets',
  async (id, thunkAPI) => {
    try {
      const response = await instance.delete(`/notices/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

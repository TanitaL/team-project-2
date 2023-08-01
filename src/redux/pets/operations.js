import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import { instance } from 'service/api/api';

// axios.defaults.baseURL = 'https://final-project-node-5vh7.onrender.com';

export const fetchPets = createAsyncThunk(
  'pets/fetchAll',

  async (category, thunkAPI) => {
    console.log("🚀 ~ category:", category)
    try {
      const response = await instance.get(
        `/notices?category=${category}&limit=20`
      );
      const notices = response.data.notices;

      const updatedNotices = notices.map(item => ({
        ...item,
        favorite: false,
      }));
      return updatedNotices;
      // return response.data.notices;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFlagFavorite = createAsyncThunk(
  'pets/addFlagFavorite',

  async (favorites, thunkAPI) => {
    return favorites;
  }
);

export const addPet = createAsyncThunk(
  'pets/addPet',
  async (data, thunkAPI) => {
    console.log('Це addPet до запита');
    try {
      const response = await instance.post('/notices', data);
      console.log('Це addPet після запита');

      return response.data.notice;
    } catch (error) {
      console.log('🚀 ~ error.message:', error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletePet = createAsyncThunk(
  'pets/deletePet',
  async (id, thunkAPI) => {
    try {
      const response = await instance.delete(`/notices/${id}`);
      console.log('🚀 ~ response:', response);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToFavorit = createAsyncThunk(
  'pets/addToFavorit',
  async (noticeId, thunkAPI) => {
    try {
      await instance.post(`/notices/${noticeId}/favorite`);
      return noticeId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


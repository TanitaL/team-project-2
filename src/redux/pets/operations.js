import { createAsyncThunk } from '@reduxjs/toolkit';
import { noticeCategories } from 'constants/noticeCategories';
// import axios from 'axios';
import { instance } from 'service/api/api';

const { SELL, LOSTFOUND, FORFREE, MYPET, FAVORITE } = noticeCategories;

// axios.defaults.baseURL = 'https://final-project-node-5vh7.onrender.com';

export const fetchPets = createAsyncThunk(
  'pets/fetchAll',

  async ({ category, query, page }, thunkAPI) => {
    try {
      let notices;
      let pages;
      if (category === SELL || category === LOSTFOUND || category === FORFREE) {
        if (query) {
          const response = await instance.get(
            `/notices?category=${category}&limit=5&page=${page}&query=${query}`
          );
          notices = response.data.notices;
          pages = response.data.pages;
          // return response.data.notices;
        } else {
          const response = await instance.get(
            `/notices?category=${category}&limit=5&page=${page}`
          );
          notices = response.data.notices;
          pages = response.data.pages;
          // return response.data.notices;
        }

        // return response.data.notices;
      } else if (category === MYPET) {
        const response = await instance.get('/notices/mypets');
        return response.data;
      } else if (category === FAVORITE) {
        const response = await instance.get('/notices/favoriteads');
        return response.data;
      }

      // const notices = response.data.notices;

      const updatedNotices = notices.map(item => ({
        ...item,
        favorite: false,
      }));
      return { updatedNotices, pages };
      // return response.data.notices;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchFavoritePets = createAsyncThunk(
  'pets/fetchFavoritePets',

  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/notices/favoriteads');
      console.log(response.data.pages);
      return response.data.notices;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchMyPets = createAsyncThunk(
  'pets/fetchMyPets',

  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/notices/mypets');
      console.log(response.data.pages);
      return response.data.notices;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const addFlagFavorite = createAsyncThunk(
  'pets/addFlagFavorite',

  async (_, thunkAPI) => {
    // return favorites;
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
      return thunkAPI.rejectWithValue(error.response.data.message);
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
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const addToFavorit = createAsyncThunk(
  'pets/addToFavorit',
  async ({ pet, categoryName }, thunkAPI) => {
    try {
      await instance.post(`/notices/${pet.id}/favorite`);
      return { pet, categoryName };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

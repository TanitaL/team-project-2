import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchPets,
  addPet,
  deletePet,
  addFlagFavorite,
  addToFavorit,
} from './operations';
import notify from 'service/addPetHelpers/toast';

const contactsActions = [
  fetchPets,
  addPet,
  deletePet,
  addFlagFavorite,
  addToFavorit,
];
const getActions = type => contactsActions.map(action => action[type]);

export const petSlice = createSlice({
  name: 'pets',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    isNavigate: false,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchPets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        console.log('🚀 ~ .addCase ~ action.payload:', action.payload);
        state.error = null;
      })
      .addCase(addFlagFavorite.fulfilled, (state, action) => {
        const faforite = action.payload;
        state.items.map((item, index) => {
          if (faforite.includes(item.id)) {
            state.items[index] = { ...item, favorite: true };
          }
          return item;
        });

        state.isLoading = false;
        state.error = null;
      })
      .addCase(addToFavorit.fulfilled, (state, action) => {
        const id = action.payload;
        state.items.forEach((item, index) => {
          if (id === item.id) {
            state.items[index] = { ...item, favorite: !item.favorite };
          }
          return item;
        });

        state.isLoading = false;
        state.error = null;
      })
      .addCase(addPet.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
        console.log('🚀 ~ .addCase ~ action.payload:', action.payload);
        state.isLoading = false;
        notify.success('Advertisement added successfully');
        state.isNavigate = true;
        state.error = null;
      })
      .addCase(deletePet.fulfilled, (state, action) => {
        console.log('🚀 ~ .addCase ~ action.payload:', action.payload);
        const index = state.items.findIndex(
          contact => contact.id === action.payload
        );
        state.items.splice(index, 1);
        state.isLoading = false;
        state.error = null;
        notify.success('Advertisement  deleted successfully');
      })
      .addMatcher(isAnyOf(...getActions('pending')), state => {
        state.isLoading = true;
        state.error = null;
        state.isNavigate = false;
      })
      .addMatcher(isAnyOf(...getActions('rejected')), (state, action) => {
        state.isLoading = false;
        state.isNavigate = false;
        state.error = action.payload;
        notify.error('Oops! Something went wrong. Please try again');
        console.log('🚀 ~ .addMatcher ~ action.payload:', action.payload);
      }),
});

export const petReduser = petSlice.reducer;

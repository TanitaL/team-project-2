import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchPets, addPet, deletePet } from './operations';
import { toast } from 'react-toastify';

const contactsActions = [fetchPets, addPet, deletePet];
const getActions = type => contactsActions.map(action => action[type]);
const notifySuccess = () =>
  toast.success('Added successfully', {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });

export const petSlice = createSlice({
  name: 'pets',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchPets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(addPet.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
        state.isLoading = false;
        notifySuccess();
        
      })
      .addCase(deletePet.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload
        );
        state.items.splice(index, 1);
        state.isLoading = false;
        // notifySuccess(`Contact ${action.payload.name} deleted successfully`);
      })
      .addMatcher(isAnyOf(...getActions('pending')), state => {
        state.isLoading = true;
        state.error =null
      })
      .addMatcher(isAnyOf(...getActions('rejected')), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const petReduser = petSlice.reducer;

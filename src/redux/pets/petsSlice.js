import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchPets, addPet, deletePet } from './operations';
// import toast from 'react-hot-toast';
const contactsActions = [fetchPets, addPet, deletePet];
const getActions = type => contactsActions.map(action => action[type]);
// const notifySuccess = text => toast.success(text);

export const petsSlice = createSlice({
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
        state.items.push(action.payload);
        state.isLoading = false;
        // notifySuccess(`Contact ${action.payload.name} added successfully`);
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
      })
      .addMatcher(isAnyOf(...getActions('rejected')), (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const petsReducer = () => petsSlice.reducer;

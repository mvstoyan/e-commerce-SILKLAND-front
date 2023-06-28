import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCategory: 'all',
};

const dressesSlice = createSlice({
  name: 'dresses',
  initialState,
  reducers: {
    filterCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { filterCategory } = dressesSlice.actions;

export const getSelectedCategory = (state) => state.dresses.selectedCategory;

export default dressesSlice.reducer;

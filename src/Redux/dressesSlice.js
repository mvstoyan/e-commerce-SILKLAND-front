import { createSlice } from '@reduxjs/toolkit';

export const dressesSlice = createSlice ({
    name: 'dresses',
    initialState: {
        selectedCategory: "all"
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }
    }
})

export const getSelectedCategory = state => state.dresses.selectedCategory;
export const { filterCategory } = dressesSlice.actions;
export default dressesSlice.reducer;



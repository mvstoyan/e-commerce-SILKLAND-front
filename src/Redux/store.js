import { configureStore } from '@reduxjs/toolkit';
import dresses from './dressesSlice';
import cart from './cartSlice';

export const store = configureStore ({
    reducer: {
        dresses,
        cart
    }
})
import { configureStore } from '@reduxjs/toolkit';
import dresses from './dressesSlice';
import cart from './cartSlice';

export const store = configureStore ({
    reducer: {
        dresses, // Reducer for managing dresses state
        cart // Reducer for managing cart state
    }
})

// configureStore is used to create the Redux store. The store is configured with 
// multiple reducers using the reducer property. The dresses reducer is responsible 
// for managing the dresses state, and the cart reducer is responsible for managing the cart state.
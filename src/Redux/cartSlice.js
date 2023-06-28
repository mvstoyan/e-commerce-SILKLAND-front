import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        quantity: 0,
        cartTotalQuantity: 0,
        cartTotalAmount: 0,
        beetween: []
        
    },
    reducers: {
        addItemToCart: (state, action) => {
            const timeId = new Date().getTime();
            const existingIndex = state.cartItems.findIndex(
                (item) => item.dressId === action.payload.dress.id
            );
            if (existingIndex >= 0) {
                state.cartItems[existingIndex] = {
                ...state.cartItems[existingIndex],
                quantity: state.cartItems[existingIndex].quantity + 1,
                };
                state.cartTotalQuantity += 1; 
            } else {
            state.cartItems.push({
                id: timeId,
                dressId: action.payload.dress.id,
                quantity: 1,
                price: action.payload.dress.price
            })
            state.cartTotalQuantity += 1;
            }
        },
        increaseCart: (state, action) => {
                const existingIndex = state.cartItems.findIndex(
                (cartItem) => cartItem.id === action.payload.cartItemID
            );
                if (existingIndex >= 0) {
                state.cartItems[existingIndex] = {
                ...state.cartItems[existingIndex],
                quantity: state.cartItems[existingIndex].quantity + 1,
                };
            } else {
                state.cartItems.push({
                dressId: action.payload.dress.id,
                quantity: 1,
            })
            }
        },
        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (cartItem) => cartItem.id === action.payload.cartItemID
            );
            if (state.cartItems[itemIndex].quantity > 1) {
            state.cartItems[itemIndex].quantity -= 1;
            } else if (state.cartItems[itemIndex].quantity === 1) {
            const nextCartItems = state.cartItems.filter(
                (cartItem) => cartItem.id !== action.payload.cartItemID
            );
            state.cartItems = nextCartItems;
            
            }
        },
        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.cartItemID
            )
            
        },
        getTotals(state, action) {
            let { total, quantity } = state.cartItems.reduce(
            (cartTotal, cartItem) => {
                const { price, quantity } = cartItem;
                const itemTotal = price * quantity;
                cartTotal.total += itemTotal;
                cartTotal.quantity += quantity;
                return cartTotal;
            },
            {
                total: 0,
                quantity: 0,
                }
            );
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },
    }
})

export const getcartTotalQuantity=state=>state.cart.cartTotalQuantity
export const getCartItems = state => state.cart.cartItems;
export const { addItemToCart2, addItemToCart, removeItemFromCart, decreaseCart, increaseCart, getTotals } = slice.actions;
export default slice.reducer;




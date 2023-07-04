import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "cart",
  initialState: {
    // Initial state of the cart
    cartItems: [], // Array to hold the items in the cart
    quantity: 0, // Total quantity of items in the cart
    cartTotalQuantity: 0, // Total quantity of unique items in the cart
    cartTotalAmount: 0, // Total amount of all items in the cart
    beetween: [], // Not sure about the purpose of this property, no comments provided
  },
  reducers: {
    addItemToCart: (state, action) => {
      // Action to add an item to the cart
      const timeId = new Date().getTime();
      const existingIndex = state.cartItems.findIndex(
        (item) => item.dressId === action.payload.dress.id
      );
      if (existingIndex >= 0) {
        // If the item already exists in the cart, update its quantity
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          quantity: state.cartItems[existingIndex].quantity + 1,
        };
        state.cartTotalQuantity += 1;
      } else {
        // If the item does not exist in the cart, add it as a new item
        state.cartItems.push({
          id: timeId,
          dressId: action.payload.dress.id,
          quantity: 1,
          price: action.payload.dress.price,
        });
        state.cartTotalQuantity += 1;
      }
    },
    increaseCart: (state, action) => {
      // Action to increase the quantity of an item in the cart
      const existingIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.cartItemID
      );
      if (existingIndex >= 0) {
        // If the item exists in the cart, increase its quantity
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          quantity: state.cartItems[existingIndex].quantity + 1,
        };
      } else {
        // If the item does not exist in the cart, add it as a new item with quantity 1
        state.cartItems.push({
          dressId: action.payload.dress.id,
          quantity: 1,
        });
      }
    },
    decreaseCart(state, action) {
      // Action to decrease the quantity of an item in the cart
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.cartItemID
      );
      if (state.cartItems[itemIndex].quantity > 1) {
        // If the quantity is greater than 1, decrease the quantity
        state.cartItems[itemIndex].quantity -= 1;
      } else if (state.cartItems[itemIndex].quantity === 1) {
        // If the quantity is 1, remove the item from the cart
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.cartItemID
        );
        state.cartItems = nextCartItems;
      }
    },
    removeItemFromCart: (state, action) => {
      // Action to remove an item from the cart
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.cartItemID
      );
    },
    getTotals(state, action) {
      // Action to calculate the total quantity and amount of all items in the cart
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
  },
});

export const getcartTotalQuantity = (state) => state.cart.cartTotalQuantity;
export const getCartItems = (state) => state.cart.cartItems;
export const {
  addItemToCart2,
  addItemToCart,
  removeItemFromCart,
  decreaseCart,
  increaseCart,
  getTotals,
} = slice.actions;
export default slice.reducer;

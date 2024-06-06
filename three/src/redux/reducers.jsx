import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart', // Add a name for the slice
  initialState: {
    cartItems: [],
    subTotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].qty += 1;
      } else {
        state.cartItems.push({ ...action.payload, qty: 1 });
      }
    },
    increment: (state, action) => {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].qty += 1;
      }
    },
    decrement: (state, action) => {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload);
      if (itemIndex >= 0 && state.cartItems[itemIndex].qty > 1) {
        state.cartItems[itemIndex].qty -= 1;
      }
    },
    deleteFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToCart,increment,decrement,deleteFromCart } = cartSlice.actions; // Export actions

export default cartSlice.reducer; // Export the reducer

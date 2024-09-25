import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      console.log(state);
      if (item) {
        item.qty += action.payload.qty;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      console.log(state);
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;

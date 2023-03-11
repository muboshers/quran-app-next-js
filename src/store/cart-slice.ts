import { createSlice } from "@reduxjs/toolkit";

interface CartInterface {
  readonly cart: any[];
}

const initialState: CartInterface = {
  cart: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state) => {
      console.log("Hello world");
    },
  },
});

export const { addToCart } = cartSlice.actions;

const cartReducer = cartSlice.reducer;

export default cartReducer;

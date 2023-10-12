import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../../interface.ts";

export interface CartState {
  products: Product[];
}

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const item = action.payload;
      const productItem = state.products.find(
        (element) => item.id === element.id
      );
      if (productItem) {
        productItem.quantity += item.quantity;
      } else {
        state.products.push(item);
      }
    },
    decrement: (state) => {},
    removeItem: (state, action: PayloadAction<number>) => {
      const item = action.payload;
      const removeItem = state.products.filter(
        (element) => element.id !== item
      );
      state.products = removeItem;
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

export const { addToCart, decrement, removeItem, resetCart } =
  cartSlice.actions;

export default cartSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "../category/CategorySlice";
import ProductSlice from "../product/ProductSlice";
export const store = configureStore({
  reducer: {
    CategorySlice,
    ProductSlice,
  },
});

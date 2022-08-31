import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "../category/CategorySlice";
import ProductSlice from "../product/ProductSlice";
import CartSlice from "../cart/CartSlice";
export const store = configureStore({
  reducer: {
    CategorySlice,
    ProductSlice,
    CartSlice,
  },
});

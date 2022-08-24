import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "../category/CategorySlice";
export const store = configureStore({
  reducer: {
    CategorySlice,
  },
});

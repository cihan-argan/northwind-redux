import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "./category/CategorySlice";
export const store = configureStore({
  reducer: {
    change: CategoryReducer,
  },
});

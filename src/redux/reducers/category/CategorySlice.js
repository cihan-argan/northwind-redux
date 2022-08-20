import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentCategory: { categoryName: "Beverage" },
};
const CategorySlice = createSlice({
  name: "changeCategory",
  initialState,
  reducers: {
    changeCategory: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const changeCategory = CategorySlice.actions;
export default CategorySlice.reducer;
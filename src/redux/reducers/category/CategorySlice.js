import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getCategories = createAsyncThunk(
  "CategorySlice/getCategories",
  async () => {
    return await fetch("http://localhost:3000/categories").then((result) =>
      result.json()
    );
  }
);
const initialState = {
  status: null,
  data: [],
  currentCategory: {},
};

const CategorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
  },
  extraReducers: {
    [getCategories.pending]: (state) => {
      state.status = "Pending";
    },

    [getCategories.fulfilled]: (state, action) => {
      state.status = "Fulfilled";
      state.data = action.payload;
    },

    [getCategories.rejected]: (state) => {
      state.status = "Rejected";
    },
  },
});

export const { changeCategory } = CategorySlice.actions;
export default CategorySlice.reducer;

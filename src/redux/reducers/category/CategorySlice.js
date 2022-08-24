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
};

const CategorySlice = createSlice({
  name: "categorySlice",
  initialState,
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

export default CategorySlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initialState } from "../initialState";

export const getProducts = createAsyncThunk(
  "ProductSlice/getProducts",
  async (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url = url + "?categoryId=" + categoryId;
    }
    return await fetch(url).then((response) => response.json());
  }
);

const ProductSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.status = "Pending";
    },

    [getProducts.fulfilled]: (state, action) => {
      state.status = "Fulfilled";
      state.products = action.payload;
    },

    [getProducts.rejected]: (state) => {
      state.status = "Rejected";
    },
  },
});
export default ProductSlice.reducer;

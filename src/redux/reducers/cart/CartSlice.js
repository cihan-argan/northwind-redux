import { createSlice } from "@reduxjs/toolkit";
import { initalState } from "../initialState";

const initialState = initalState;

const CartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state = initalState.cart;
      var addedItem = state.find(
        (c) => c.product.id === action.payload.product.id
      );
      if (addedItem) {
        var newState = state.map((cartItem) => {
          if (cartItem.product.id === action.cartItem.product.id) {
            return Object.assign({}, addedItem, {
              quantity: addedItem.quantity + 1,
            });
          }
          return cartItem;
        });
        return newState;
      } else {
        return [...state, { ...action.payload }];
      }
    },
  },
});
export const { addToCart } = CartSlice.actions;
export default CartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";

const CartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.product.id === action.payload.product.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
      } else {
        const temp = { ...action.payload, quantity: 1 };
        state.cartItems.push(temp);
      }
    },
    removeFromCart: (state, action) => {
      const itemIndex2 = state.cartItems.findIndex(
        (i) => i.product.id === action.payload.product.id
      );
      if (itemIndex2 >= 0) {
        state.cartItems.splice(itemIndex2, 1);
        return state;
      } else {
        return state;
      }
    },
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;

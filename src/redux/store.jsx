import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer, // استخدم cartReducer بدلًا من cartSlice
  },
});

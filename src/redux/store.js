import { configureStore } from "@reduxjs/toolkit";
import cartRedux from "./cartRedux";

const store = configureStore({
  reducer: {
    cart: cartRedux,
  },
});

export default store;

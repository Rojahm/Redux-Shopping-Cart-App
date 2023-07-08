import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authSlice";
import cartReducer from "../reducers/cartSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});

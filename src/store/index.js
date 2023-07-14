import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authSlice";
import cartReducer from "../reducers/cartSlice";
import notificationReducer from "../reducers/notificationSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    notification: notificationReducer,
  },
});

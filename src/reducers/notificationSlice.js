import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    open: false,
    message: null,
    type: null,
  },
  reducers: {
    showNotification(state, action) {
      console.log(action.payload);
      state.open = action.payload.open;
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
  },
});
export const { showNotification } = notificationSlice.actions;
export default notificationSlice.reducer;

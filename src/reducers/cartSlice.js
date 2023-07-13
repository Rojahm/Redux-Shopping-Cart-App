import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
    totalCartPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemsList = [
          ...state.itemsList,
          {
            id: newItem.id,
            price: newItem.price,
            quantity: 1,
            totalPrice: newItem.price,
            name: newItem.name,
          },
        ];
      }
      state.totalQuantity++;
      state.totalCartPrice += newItem.price;
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.itemsList.find((item) => item.id === id);
      if (existingItem) {
        state.totalQuantity--;
        state.totalCartPrice -= existingItem.price;
      }
      if (existingItem.quantity <= 1) {
        state.itemsList = state.itemsList.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
      if (state.totalQuantity <= 0) {
        state.showCart = false;
      }
    },
    showCart(state) {
      if (state.totalQuantity <= 0) {
        state.showCart = false;
      } else {
        if (state.showCart) {
          state.showCart = false;
        } else {
          state.showCart = true;
        }
      }
    },
  },
});
export const { addToCart, removeFromCart, showCart } = cartSlice.actions;
export default cartSlice.reducer;

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
      const itemToRemove = state.itemsList.find(
        (item) => item.id === action.payload
      );
      itemToRemove.quantity--;
      itemToRemove.totalPrice -= itemToRemove.price;
      if (itemToRemove.quantity <= 0) {
        state.itemsList.splice(state.itemsList.indexOf(itemToRemove), 1);
      }
      state.totalCartPrice -= itemToRemove.price;
      state.totalQuantity--;
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

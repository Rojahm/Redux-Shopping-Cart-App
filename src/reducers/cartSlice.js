import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
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
    },
    removeFromCart(state) {},
    showCart(state) {
      state.showCart = true;
    },
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;

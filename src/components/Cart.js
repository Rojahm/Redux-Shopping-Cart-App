import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { showCart } from "../reducers/cartSlice";

const Cart = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  return (
    <div className="cartIcon" onClick={() => dispatch(showCart())}>
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;

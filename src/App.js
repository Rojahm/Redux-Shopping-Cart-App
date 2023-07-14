import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    fetch(
      "https://redux-http-79d24-default-rtdb.europe-west1.firebasedatabase.app/cartItems.json",
      {
        method: "PUT",
        body: JSON.stringify(cart),
      }
    );
  }, [cart]);
  return (
    <div className="App">
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;

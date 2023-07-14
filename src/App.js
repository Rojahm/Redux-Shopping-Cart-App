import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/Notification";
import { showNotification } from "./reducers/notificationSlice";

function App() {
  const dispatch = useDispatch();
  const notificationType = useSelector((state) => state.notification.type);
  const notificationMsg = useSelector((state) => state.notification.message);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    const sendRequest = async () => {
      //sending req
      dispatch(
        showNotification({
          open: true,
          message: "sending request",
          type: "warning",
        })
      );
      const response = await fetch(
        "https://redux-http-79d24-default-rtdb.europe-west1.firebasedatabase.app/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await response.json();
      //sent
      dispatch(
        showNotification({
          open: true,
          message: "request sent",
          type: "success",
        })
      );
    };
    sendRequest().catch((error) => {
      //error
      dispatch(
        showNotification({
          open: true,
          message: "request error",
          type: "error",
        })
      );
    });
  }, [cart]);
  return (
    <div className="App">
      <Notification type={notificationType} message={notificationMsg} />
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;

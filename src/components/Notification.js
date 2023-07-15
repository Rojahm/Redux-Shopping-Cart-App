import React from "react";
import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { showNotification } from "../reducers/notificationSlice";

const Notification = ({ type, message }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(showNotification({ open: false }));
  };
  const open = useSelector((state) => state.notification.open);
  return (
    <div>
      <br />
      {open && (
        <Alert onClose={handleClose} severity={type}>
          {message}
        </Alert>
      )}
    </div>
  );
};

export default Notification;

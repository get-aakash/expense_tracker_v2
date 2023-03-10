import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRouter = ({ children }) => {
  let logedIn = false;

  const userStr = sessionStorage.getItem("logedInUser");
  if (userStr) {
    const user = JSON.parse(userStr);
    console.log("user_id"+user.id)
    logedIn = user.id ? true : false;
  }

  return logedIn ? children : <Navigate to="/" />;
};
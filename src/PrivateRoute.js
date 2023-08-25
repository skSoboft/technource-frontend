import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import auth from "./utils/auth";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = auth;
  const location = useLocation();

  //   if (!isAuthenticated()) {

  //     return <Navigate to="/login" state={{ from: location }} />;
  //   }

  return children;
};

export default PrivateRoute;

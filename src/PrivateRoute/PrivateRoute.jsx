import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";
import Login from "../Pages/Login";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  const location = useLocation();
  //   console.log(location);

  if (!user) {
    return <Navigate to={"/login"} state={location.pathname} />;
  }
  return children;
};

export default PrivateRoute;

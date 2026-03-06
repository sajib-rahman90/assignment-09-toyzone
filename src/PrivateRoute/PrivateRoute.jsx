import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";
import Login from "../Pages/Login";
import Loading from "../Components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();
  //   console.log(location);

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to={"/login"} state={location.pathname} />;
  }
  return children;
};

export default PrivateRoute;

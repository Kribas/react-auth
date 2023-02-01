import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

// recieves component and any other props represented by ...rest
const ProtectedRoutes = () => {
  const token = cookies.get("TOKEN");
  return token ? (
    <Outlet />
  ) : (
    <Navigate
      to={{
        pathname: "/",
      }}
      replace
    />
  );
};

export default ProtectedRoutes;

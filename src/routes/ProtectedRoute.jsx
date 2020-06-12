import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "../components/Login";

/**
 * Redirect users from protected pages to home page before login.
 */
const ProtectedRoute = ({ component: Component, isAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={routerProps =>
        isAuth ? (
          <Component {...routerProps} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
};

export default ProtectedRoute;

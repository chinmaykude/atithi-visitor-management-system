import React from "react";
import { Route, Redirect } from "react-router-dom";
import CheckInCheckOutMain from "../components/CheckInCheckOutMain";
import Home from "../components/Home";

/**
 * Redirect users from auth pages to home page after login.
 */
const AuthRoute = ({ component: Component, isAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={routerProps => {
        return !isAuth ? (
          <Component {...routerProps} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        );
      }}
    />
  );
};

export default AuthRoute;

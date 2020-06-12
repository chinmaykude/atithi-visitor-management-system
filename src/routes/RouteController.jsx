import React from "react";
import { Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import AuthRoute from "./AuthRoute";

const RouteController = props => {
  const { routeType, ...routeProps } = props;
  return (
    <>
      {routeType === "public" && <Route {...routeProps} />}
      {routeType === "protected" && <ProtectedRoute {...routeProps} />}
      {routeType === "auth" && <AuthRoute {...routeProps} />}
    </>
  );
};
export default RouteController;

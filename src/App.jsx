import React from "react";
import { Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Routes from "./routes/Routes";
import NavbarPublic from "./components/NavbarPublic";
import store from "./redux/store";
import { logoutUser, loginUserSuccess } from "./redux/authentication/actions";
import axios from "./utils/axiosInterceptor";

const token = localStorage.FBIdToken;

if (token) {
  // token is stored as `Bearer <jwt>`; extract the actual JWT part
  const rawToken = token.startsWith("Bearer ") ? token.split(" ")[1] : token;
  let decodedToken = null;
  try {
    decodedToken = jwtDecode(rawToken);
  } catch (e) {
    // invalid token in storage; clear and force login
    store.dispatch(logoutUser());
  }
  if (decodedToken && decodedToken.exp * 1000 < Date.now()) {
    window.location.href = "/login";
    store.dispatch(logoutUser());
  } else {
    // restore axios header on refresh
    axios.defaults.headers.common.Authorization = token;
    store.dispatch(loginUserSuccess(token));
  }
}

const App = () => {
  return (
    <>
      <NavbarPublic />
      <Route path="/" component={Routes} />
    </>
  );
};

export default App;

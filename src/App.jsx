import React from "react";
import { Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Routes from "./routes/Routes";
import NavbarPublic from "./components/NavbarPublic";
import store from "./redux/store";
import { logoutUser, loginUserSuccess } from "./redux/authentication/actions";

const token = localStorage.FBIdToken;

if (token) {
  const decodedToken = jwtDecode(token);
  console.log(`decodedToken`, decodedToken.exp);
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = "/login";
    store.dispatch(logoutUser());
  } else {
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

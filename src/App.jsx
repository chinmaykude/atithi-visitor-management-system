import React from "react";
import { Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Routes from "./routes/Routes";
import NavbarPublic from "./components/NavbarPublic";
import store from "./redux/store";
import { logoutUser, loginUserSuccess } from "./redux/authentication/actions";

const token = localStorage.getItem("FBIdToken");

if (token) {
  try {
    const decodedToken = jwtDecode(token);
    console.log(`decodedToken`, decodedToken.exp);
    if (decodedToken.exp * 1000 < Date.now()) {
      window.location.href = "/login";
      store.dispatch(logoutUser());
    } else {
      store.dispatch(loginUserSuccess(token));
    }
  } catch (error) {
    console.error("Invalid token, redirecting to login:", error);
    localStorage.removeItem("FBIdToken");
    window.location.href = "/login";
    store.dispatch(logoutUser());
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

/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../redux/authentication/actions";

const NavBar = ({ isAuth, logoutUser }) => {
  console.log(`isAuth from Navbar ${isAuth}`);
  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <Link
            to="/"
            className="navbar-brand"
            style={{ fontSize: "30px", fontFamily: "herculanum" }}
          >
            ATITHI
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {!isAuth ? (
            <div
              className="collapse navbar-collapse text-right"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto ">
                <li
                  className="nav-item active"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  <Link
                    to="/login"
                    type="button"
                    className="btn btn-outline-primary mx-3 my-1"
                    style={{ fontSize: "16px", fontFamily: "herculanum" }}
                  >
                    Login
                  </Link>
                </li>
                <li
                  className="nav-item"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  <Link
                    to="/register"
                    type="button"
                    className="btn btn-outline-primary mx-3 my-1"
                    style={{ fontSize: "16px", fontFamily: "herculanum" }}
                  >
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <div
              className="collapse navbar-collapse text-right"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto ">
                <li
                  className="nav-item active"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  <Link
                    to="/main_checkin_checkout"
                    type="button"
                    className="btn btn-outline-primary mx-3 my-1"
                    style={{ fontSize: "16px", fontFamily: "herculanum" }}
                  >
                    Main page
                  </Link>
                </li>
                <li
                  className="nav-item"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  <Link
                    to="/admin_dashboard"
                    type="button"
                    className="btn btn-outline-primary mx-3 my-1"
                    style={{ fontSize: "16px", fontFamily: "herculanum" }}
                  >
                    Admin Dashboard
                  </Link>
                </li>
                <li
                  className="nav-item"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  <button
                    className="btn btn-outline-primary mx-3 my-1"
                    style={{ fontSize: "16px", fontFamily: "herculanum" }}
                    onClick={logoutUser}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth
});

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

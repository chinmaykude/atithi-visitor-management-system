import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Dashboard from "../components/Dashboard/Dashboard";
import Settings from "../components/Dashboard/Settings";
import Profile from "../components/Dashboard/Profile";
import Reports from "../components/Dashboard/Reports";
import NavBar from "../components/Dashboard/NavBar";

const DashboardRoutes = props => {
  const { isAuth } = props;
  return isAuth ? (
    <>
      <Route path="/dash" render={NavBar} />
      <Route path="/dash" exact render={() => <Dashboard />} />
      <Route path="/dash/settings" render={() => <Settings />} />
      <Route path="/dash/profile" render={() => <Profile />} />
      <Route path="/dash/reports" render={() => <Reports />} />
    </>
  ) : (
    <Redirect to="/login" />
  );
};

DashboardRoutes.propTypes = {
  isAuth: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth
});

export default connect(mapStateToProps)(DashboardRoutes);

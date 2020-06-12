/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import propTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import DashboardRoutes from "./DashboardRoutes";
import Login from "../components/Login";
import VisitorRegistration from "../components/VisitorRegistration";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import NavBarPublic from "../components/NavbarPublic";
import NoMatch from "../components/NoMatch/NoMatch";
import CheckInCheckOutMain from "../components/CheckInCheckOutMain";
import CheckOutToken from "../components/CheckOutToken";
import UserVisitDetails from "../components/UserVisitDetails";
import UserVisitDetailsUpdated from "../components/UserVisitDetailsUpdated";
import FirstTimeOrRegisteredBeforeCheck from "../components/FirstTimeOrRegisteredBeforeCheck";
import EmailVerificationOfRegisteredVisitor from "../components/EmailVerificationOfRegisteredVisitor";
import CheckinSuccess from "../components/CheckinSuccess";
import AdminDashboard from "../components/AdminDashboard";
import Register from "../components/Register";
import RouteController from "./RouteController";

const Routes = props => {
  const { history, location, isAuth } = props;
  return (
    <>
      {/* <Switch> */}
      <RouteController
        routeType={"public"}
        isAuth={isAuth}
        component={NavBarPublic}
        path={"/"}
      />
      <RouteController
        routeType={"public"}
        isAuth={isAuth}
        component={Home}
        path={"/"}
        exact
      />
      <RouteController
        routeType={"auth"}
        isAuth={isAuth}
        component={Login}
        path={"/login"}
        history={history}
        exact
      />
      <RouteController
        routeType={"auth"}
        isAuth={isAuth}
        component={Register}
        path={"/register"}
        history={history}
        exact
      />
      <RouteController
        routeType={"protected"}
        isAuth={isAuth}
        component={VisitorRegistration}
        path={"/visitor_registration"}
        history={history}
        exact
      />
      <RouteController
        routeType={"protected"}
        isAuth={isAuth}
        component={CheckInCheckOutMain}
        path={"/main_checkin_checkout"}
        history={history}
        exact
      />
      <RouteController
        routeType={"protected"}
        isAuth={isAuth}
        component={CheckOutToken}
        path={"/checkout"}
        history={history}
        exact
      />
      <RouteController
        routeType={"protected"}
        isAuth={isAuth}
        component={About}
        path={"/about"}
        history={history}
        exact
      />
      <RouteController
        routeType={"protected"}
        isAuth={isAuth}
        component={Contact}
        path={"/contact"}
        history={history}
        exact
      />
      <RouteController
        routeType={"protected"}
        isAuth={isAuth}
        component={UserVisitDetails}
        path={"/user_visit_details"}
        history={history}
        exact
      />
      <RouteController
        routeType={"protected"}
        isAuth={isAuth}
        component={FirstTimeOrRegisteredBeforeCheck}
        path={"/first_time_or_registered_before"}
        history={history}
        exact
      />
      <RouteController
        routeType={"protected"}
        isAuth={isAuth}
        component={EmailVerificationOfRegisteredVisitor}
        path={"/email_verification"}
        history={history}
        exact
      />
      <RouteController
        routeType={"protected"}
        isAuth={isAuth}
        component={CheckinSuccess}
        path={"/checkin_success"}
        history={history}
        exact
      />
      <RouteController
        routeType={"protected"}
        isAuth={isAuth}
        component={UserVisitDetailsUpdated}
        path={"/user_visit_details_updated"}
        history={history}
        exact
      />
      <RouteController
        routeType={"protected"}
        isAuth={isAuth}
        component={AdminDashboard}
        path={"/admin_dashboard"}
        history={history}
        exact
      />
      <RouteController routeType={"nomatch"} component={NoMatch} path={"*"} />
      {/* <Route path="/login" render={() => <Login history={history} />} />
        <Route path="/register" render={() => <Register history={history} />} /> */}
      {/* <Route path="*" render={() => <NoMatch />} /> */}
      {/* </Switch> */}
    </>
  );
};

Routes.defaultProps = {
  history: propTypes.object,
  location: propTypes.object
};

Routes.propTypes = {
  history: propTypes.object,
  location: propTypes.object
};

const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth
});

export default connect(mapStateToProps, null)(Routes);

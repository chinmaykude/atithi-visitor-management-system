/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import propTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Login from "../components/Login";
import VisitorRegistration from "../components/VisitorRegistration";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import NoMatch from "../components/NoMatch/NoMatch";
import CheckInCheckOutMain from "../components/CheckInCheckOutMain";
import CheckOutToken from "../components/CheckOutToken";
import UserVisitDetailsUpdated from "../components/UserVisitDetailsUpdated";
import FirstTimeOrRegisteredBeforeCheck from "../components/FirstTimeOrRegisteredBeforeCheck";
import EmailVerificationOfRegisteredVisitor from "../components/EmailVerificationOfRegisteredVisitor";
import CheckinSuccess from "../components/CheckinSuccess";
import AdminDashboard from "../components/AdminDashboard";
import Register from "../components/Register";

const Routes = props => {
  const { history, location, isAuth } = props;
  return (
    <Switch>
      <Route path="/" exact render={() => <Home />} />
      <Route path="/login" render={() => <Login history={history} />} />
      <Route path="/register" render={() => <Register history={history} />} />
      <Route
        path="/visitor_registration"
        render={() => (
          <VisitorRegistration
            isAuth={isAuth}
            history={history}
            location={location}
          />
        )}
      />
      <Route path="/about" render={() => <About />} />
      <Route path="/contact" render={() => <Contact />} />
      <Route
        path="/main_checkin_checkout"
        render={() => <CheckInCheckOutMain isAuth={isAuth} history={history} />}
      />
      <Route
        path="/checkout"
        render={() => <CheckOutToken isAuth={isAuth} history={history} />}
      />
      <Route
        path="/first_time_or_registered_before"
        render={() => (
          <FirstTimeOrRegisteredBeforeCheck isAuth={isAuth} history={history} />
        )}
      />
      <Route
        path="/email_verification"
        render={() => (
          <EmailVerificationOfRegisteredVisitor
            isAuth={isAuth}
            history={history}
          />
        )}
      />
      <Route
        path="/checkin_success"
        render={() => <CheckinSuccess isAuth={isAuth} history={history} />}
      />
      <Route
        path="/checkout"
        render={() => <CheckOutToken isAuth={isAuth} />}
      />
      <Route
        path="/user_visit_details_updated"
        render={() => (
          <UserVisitDetailsUpdated isAuth={isAuth} history={history} />
        )}
      />
      <Route
        path="/admin_dashboard"
        render={() => <AdminDashboard isAuth={isAuth} history={history} />}
      />
      <Route component={NoMatch} />
    </Switch>
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

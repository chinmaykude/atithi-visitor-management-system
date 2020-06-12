import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import propTypes from "prop-types";
import {
  fBaseAddVisitDetails,
  fBaseVisitorRegister
} from "../config/fbaseConfig";
import { fetchVisitDetails } from "../redux/visitorRegistration/actions";

class CheckInCheckOutMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gotoCheckin: false,
      gotoCheckout: false
    };
  }

  componentDidMount = () => {
    const { isAuth, visitDetails, fetchVisitDetails } = this.props;
    // console.log('isAuth, isAuthenticatedCount', isAuth, isAuthenticatedCount)
    console.log(visitDetails);
    if (isAuth && !visitDetails.length) {
      fetchVisitDetails();
    }
  };

  handleClick = e => {
    e.preventDefault();
    if (e.target.value === "checkin") {
      this.setState({
        gotoCheckin: true
      });
    } else if (e.target.value === "checkout") {
      this.setState({
        gotoCheckout: true
      });
    }
  };

  admin = () => {
    const { history } = this.props;
    history.push("/admin_dashboard");
  };

  render() {
    const { gotoCheckin, gotoCheckout } = this.state;
    const { history, isAuth } = this.props;
    if (!isAuth) {
      return <Redirect to={{ pathname: "/login" }} />;
    }
    if (!gotoCheckin && !gotoCheckout) {
      return (
        <div className="container-fluid text-center">
          <h2
            className="mb-5"
            style={{ fontFamily: "herculanum", marginTop: "30px" }}
          >
            Welcome to Atithi..!!
          </h2>
          <div
            className="row p-2"
            style={{ fontFamily: "herculanum", marginTop: "30px" }}
          >
            <div className="col-12 col-md-6 mb-5">
              <button
                type="button"
                value="checkin"
                className="btn btn-primary"
                style={{ width: "50%" }}
                onClick={e => this.handleClick(e)}
              >
                Check-In
              </button>
            </div>
            <div className="col-12 col-md-6">
              <button
                type="button"
                value="checkout"
                className="btn btn-primary"
                style={{ width: "50%" }}
                onClick={e => this.handleClick(e)}
              >
                Check-Out
              </button>
            </div>
            <div className="col-12 col-md-6 m-auto">
              <button
                type="button"
                value="checkout"
                className="btn btn-outline-secondary"
                // style={{ width: "50%" }}
                onClick={e => this.admin(e)}
              >
                Go to Admin Dashboard
              </button>
            </div>
          </div>
        </div>
      );
    }
    if (gotoCheckin) {
      return <>({history.push("/first_time_or_registered_before")})</>;
    }
    if (gotoCheckout) {
      return <>({history.push("/checkout")})</>;
    }
    return null;
  }
}

const mapStateToProps = state => {
  return {
    visitDetails: state.visitorReducer.visitDetails
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchVisitDetails: data => dispatch(fetchVisitDetails(data))
    // allVisitorData: data => dispatch(visitorData(data))
  };
};

CheckInCheckOutMain.defaultProps = {
  history: propTypes.object,
  allVisitData: propTypes.object,
  allVisitorData: propTypes.object
};
CheckInCheckOutMain.propTypes = {
  history: propTypes.object,
  allVisitData: propTypes.object,
  allVisitorData: propTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckInCheckOutMain);

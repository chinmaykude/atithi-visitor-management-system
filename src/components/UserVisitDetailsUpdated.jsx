/* eslint-disable camelcase */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import propTypes from "prop-types";
import { addVisitDetails } from "../redux/visitorRegistration/actions";
import NewVisitDetails from "./common/NewVisitDetails";
import ShowLoading from "./common/ShowLoading";

class UserVisitDetailsUpdated extends Component {
  constructor() {
    super();
    this.state = {
      visitType: "",
      companyName: "",
      whomToMeet: "",
      whomToMeetEmail: "",
      visitorEmail: "",
      visitorName: "",
      visitorMobile: "",
      imageUrl: "",
      checkedOut: false,
      checkin_timestamp: Date.now(),
      checkout_timestamp: "",
      visitID: Number(
        Math.random()
          .toString()
          .slice(2, 8)
      )
    };
  }

  componentDidMount() {
    const { existingVisitorDataFromDB } = this.props;

    if (Object.keys(existingVisitorDataFromDB).length) {
      console.log(existingVisitorDataFromDB);
      const {
        visitorEmail,
        visitorName,
        visitorMobile,
        imageUrl
      } = existingVisitorDataFromDB;
      this.setState({
        visitorEmail,
        visitorName,
        visitorMobile,
        imageUrl
      });
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();

    let whomToMeetEmail = "";
    this.setState(prevState => ({
      visitType: prevState.visitType,
      companyName: prevState.companyName,
      visitorEmail: prevState.visitorEmail,
      visitorName: prevState.visitorName,
      visitorMobile: prevState.visitorMobile,
      imageUrl: prevState.imageUrl,
      checkedOut: false,
      checkin_timestamp: Date.now(),
      checkout_timestamp: "",
      visitID: Number(
        Math.random()
          .toString()
          .slice(2, 8)
      )
    }));

    const { whomToMeet } = this.state;
    if (whomToMeet === "Nrupul") {
      whomToMeetEmail = "chinmaykude@outlook.com";
    } else if (whomToMeet === "Yogesh") {
      whomToMeetEmail = "chinmaykude@outlook.com";
    } else if (whomToMeet === "Albert") {
      whomToMeetEmail = "chinmaykude@outlook.com";
    }

    const { addVisitDetails, history } = this.props;
    console.log(this.props);
    addVisitDetails(this.state, whomToMeetEmail, history);
  };

  render() {
    const { visitorName, imageUrl } = this.state;
    const { isVisitCheckInLoading, isAuth } = this.props;
    if (!isAuth) {
      return <Redirect to={{ pathname: "/login" }} />;
    }
    return isVisitCheckInLoading ? (
      <ShowLoading label="Your visit data is being stored.." />
    ) : (
      <NewVisitDetails
        imageUrl={imageUrl}
        visitorName={visitorName}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
      />
    );
  }
}

const mapStateToProps = state => ({
  existingVisitorDataFromDB: state.visitorReducer.existingVisitorDataFromDB,
  isVisitCheckInLoading: state.visitorReducer.isVisitCheckInLoading
});

const mapDispatchToProps = dispatch => {
  return {
    addVisitDetails: (obj, whomToMeetEmail, history) =>
      dispatch(addVisitDetails(obj, whomToMeetEmail, history))
  };
};

UserVisitDetailsUpdated.defaultProps = {
  history: propTypes.object,
  addVisitDetailsDes: propTypes.func
};

UserVisitDetailsUpdated.propTypes = {
  history: propTypes.object,
  addVisitDetailsDes: propTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserVisitDetailsUpdated);

/* eslint-disable camelcase */
import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { addVisitDetails } from "../redux/visitorRegistration/actions";

class UserVisitDetails extends Component {
  constructor(props) {
    super(props);
    const { location } = this.props;
    const { state } = location;
    const { visitorEmail, visitorName, visitorMobile, imageUrl } = state;

    this.state = {
      id: "",
      visitType: "",
      companyName: "",
      whomToMeet: "",
      whomToMeetEmail: "",
      visitorEmail,
      visitorName,
      visitorMobile,
      imageUrl,
      // visiter_email: this.props.location.state.visiter_email,
      checkedOut: false,
      checkin_timestamp: Date(),
      checkout_timestamp: "",
      visitID: Math.random()
        .toString()
        .slice(2, 8)
    };
  }

  componentDidMount() {
    if (this.props.location.state.isRedirectFromVisitorRegistration) {
      console.log(
        "isRedirectFromVisitorRegistration = true",
        this.props.location.state
      );
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    // console.log("this.state before", this.state);
    // let whomToMeetEmail = "";
    e.preventDefault();
    if (e.target.value === "newlyResisteredVisitor") {
      const {
        visitType,
        companyName,
        whomToMeet,
        visitorEmail,
        visitorName,
        visitorMobile,
        imageUrl
      } = this.state;

      this.setState({
        visitType,
        companyName,
        whomToMeet,
        visitorEmail,
        visitorName,
        visitorMobile,
        imageUrl,
        checkedOut: false,
        checkin_timestamp: Date(),
        checkout_timestamp: "",
        visitID: Math.random()
          .toString()
          .slice(2, 8)
      });
      let whomToMeetEmail = "";
      if (whomToMeet === "Nrupul") {
        whomToMeetEmail = "chinmaykude@outlook.com";
      } else if (whomToMeet === "Yogesh") {
        whomToMeetEmail = "chinmaykude@outlook.com";
      } else if (whomToMeet === "Albert") {
        whomToMeetEmail = "chinmaykude@outlook.com";
      }
      this.setState({
        whomToMeetEmail
      });
      console.log("this.state from component", this.state);
      const { history } = this.props;
      const { addVisitDetailsDes } = this.props;
      addVisitDetailsDes(this.state, whomToMeetEmail);
      history.push("/checkin_success");
    } else if (e.target.value === "alreadyPresentVisitor") {
      console.log(this.state);
      // const { visitType } = this.state;
      // const { companyName } = this.state;
      // const { whomToMeet } = this.state;
      // const { visitorName } = this.state;
      // const { visitorMobile } = this.state;
      // const { imageUrl } = this.state;
      // let { whomToMeetEmail } = this.state;

      // const { visitorEmail } = this.state;
      let whomToMeetEmail = "";
      this.setState(prevState => ({
        visitType: prevState.visitType,
        companyName: prevState.companyName,
        visitorEmail: prevState.visitorEmail,
        visitorName: prevState.visitorName,
        visitorMobile: prevState.visitorMobile,
        imageUrl: prevState.imageUrl,
        checkedOut: false,
        checkin_timestamp: Date(),
        checkout_timestamp: "",
        visitID: Math.random()
          .toString()
          .slice(2, 8)
      }));
      const { whomToMeet } = this.state;
      if (whomToMeet === "Nrupul") {
        whomToMeetEmail = "chinmaykude@outlook.com";
      } else if (whomToMeet === "Yogesh") {
        whomToMeetEmail = "chinmaykude@outlook.com";
      } else if (whomToMeet === "Albert") {
        whomToMeetEmail = "chinmaykude@outlook.com";
      }

      // console.log("this.state from component", this.state);
      const { history } = this.props;
      const { addVisitDetailsDes } = this.props;
      addVisitDetailsDes(this.state, whomToMeetEmail);
      history.push("/checkin_success");
    }
  };

  render() {
    // console.log(this.state);
    const { location, isAuth } = this.props;
    const { state } = location;
    const { isRedirectFromVisitorRegistration, imageUrl, visitorName } = state;

    if (isRedirectFromVisitorRegistration) {
      return (
        <>
          <div className="container-fluid text-center">
            <p
              className="my-4"
              style={{ fontSize: "36px", fontFamily: "herculanum" }}
            >
              Visit Details Please..!!
            </p>
            <div className="row mt-5">
              <div className="col-12 col-md-4">
                <img
                  style={{
                    borderRadius: " 50% ",
                    width: "150px",
                    height: "150px"
                  }}
                  src={imageUrl}
                  alt="User Avatar"
                />
              </div>
              <div className="col-12 col-md-8">
                <p
                  className="text-left"
                  style={{ fontSize: "30px", fontFamily: "Tomorrow" }}
                >
                  Welcome, {visitorName}
                </p>
                <div className="text-left">
                  <select
                    className="col-6 col-md-3 btn-lg btn-outline-primary mx-2 my-2"
                    name="visitType"
                    onChange={this.handleChange}
                  >
                    <option value="" disabled selected>
                      Visit Type
                    </option>
                    <option value="Meeting">Meeting</option>
                    <option value="Interview">Interview</option>
                    <option value="Others">Others</option>
                  </select>
                  <select
                    className="col-6 col-md-3 btn-lg btn-outline-primary mx-2 my-2"
                    name="companyName"
                    onChange={this.handleChange}
                  >
                    <option value="" disabled selected>
                      Company Name
                    </option>
                    <option value="Masai School">Masai School</option>
                    <option value="Human-X">Human-X</option>
                  </select>
                  <select
                    className="col-6 col-md-3 btn-lg btn-outline-primary mx-2 my-2"
                    name="whomToMeet"
                    onChange={this.handleChange}
                  >
                    <option value="" disabled selected>
                      Whom To Meet
                    </option>
                    <option value="Nrupul">Nrupul</option>
                    <option value="Yogesh">Yogesh</option>
                    <option value="Albert">Albert</option>
                  </select>
                </div>
                <div className="text-center mt-3">
                  <button
                    type="button"
                    value="newlyResisteredVisitor"
                    className=" col-6 col-md-5 btn btn-primary"
                    onClick={e => this.handleClick(e)}
                  >
                    Check In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
    return (
      <>
        <div className="container-fluid text-center">
          <p
            className="my-4"
            style={{ fontSize: "36px", fontFamily: "herculanum" }}
          >
            Visit Details Please..!!
          </p>
          <div className="row mt-5">
            <div className="col-12 col-md-4">
              <img
                style={{
                  borderRadius: " 50% ",
                  width: "150px",
                  height: "150px"
                }}
                src={imageUrl}
                alt="User Avatar"
              />
            </div>
            <div className="col-12 col-md-8">
              <p
                className="text-left"
                style={{ fontSize: "30px", fontFamily: "Tomorrow" }}
              >
                Welcome, {visitorName}
                {/* {console.log(this.props.location.state.temp)} */}
              </p>
              <div className="text-center">
                <select
                  className="col-6 col-md-3 btn-lg btn-outline-primary mx-2 my-2"
                  name="visitType"
                  onChange={this.handleChange}
                >
                  <option value="" disabled selected>
                    Visit Type
                  </option>
                  <option value="Meeting">Meeting</option>
                  <option value="Interview">Interview</option>
                  <option value="Others">Others</option>
                </select>
                <select
                  className="col-6 col-md-3 btn-lg btn-outline-primary mx-2 my-2"
                  name="companyName"
                  onChange={this.handleChange}
                >
                  <option value="" disabled selected>
                    Company Name
                  </option>
                  <option value="Masai School">Masai School</option>
                  <option value="Human-X">Human-X</option>
                </select>
                <select
                  className="col-6 col-md-3 btn-lg btn-outline-primary mx-2 my-2"
                  name="whomToMeet"
                  onChange={this.handleChange}
                >
                  <option value="" disabled selected>
                    Whom To Meet
                  </option>
                  <option value="Nrupul">Nrupul</option>
                  <option value="Yogesh">Yogesh</option>
                  <option value="Albert">Albert</option>
                </select>
              </div>
              <div className="text-center mt-3">
                <button
                  type="button"
                  value="alreadyPresentVisitor"
                  className=" col-6 col-md-5 btn btn-primary"
                  onClick={this.handleClick}
                >
                  Check In
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addVisitDetailsDes: (obj, whomToMeetEmail) =>
      dispatch(addVisitDetails(obj, whomToMeetEmail))
  };
};
UserVisitDetails.defaultProps = {
  history: propTypes.object,
  addVisitDetailsDes: propTypes.func,
  location: propTypes.object,
  state: propTypes.object
};
UserVisitDetails.propTypes = {
  history: propTypes.object,
  addVisitDetailsDes: propTypes.func,
  location: propTypes.object,
  state: propTypes.object
};
export default connect(null, mapDispatchToProps)(UserVisitDetails);

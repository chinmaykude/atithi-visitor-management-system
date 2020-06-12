/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { checkForExistingVisitor } from "../redux/visitorRegistration/actions";
import ShowLoading from "./common/ShowLoading";

class EmailVerificationOfRegisteredVisitor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();
    this.setState(prevState => ({
      email: prevState.email
    }));
    const { checkForExistingVisitor, history } = this.props;
    const { email } = this.state;
    if (email.trim() === "") {
      return alert("Email field cannot be left empty");
    } else {
      checkForExistingVisitor(email, history);
    }
  };

  render() {
    const { isCheckExistingVisitorLoading, isAuth } = this.props;
    console.log("isCheckExistingVisitorLoading", isCheckExistingVisitorLoading);
    if (!isAuth) {
      return <Redirect to={{ pathname: "/login" }} />;
    }
    return isCheckExistingVisitorLoading ? (
      <ShowLoading label={"Verifying email.."} />
    ) : (
      <>
        <form className="col-8 col-md-4 col-sm-6 m-auto">
          <div className="form-group mt-4">
            Email address
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">
              We&lsquo;ll never share your email with anyone else.
            </small>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleClick}
          >
            Submit
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log("map state called", state);
  return {
    isCheckExistingVisitorLoading:
      state.visitorReducer.isCheckExistingVisitorLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkForExistingVisitor: (email, history) =>
      dispatch(checkForExistingVisitor(email, history))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmailVerificationOfRegisteredVisitor);

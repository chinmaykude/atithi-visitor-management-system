import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class FirstTimeOrRegisteredBeforeCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFirstTime: false,
      isAlreadyRegistered: false
    };
  }

  handleClick = e => {
    e.preventDefault();
    // console.log("inside handle click", e.target.value);
    if (e.target.value === "newVisitor") {
      //   console.log("new visitor");
      //   console.log(this.props);
      this.setState({
        isFirstTime: true
      });
    } else if (e.target.value === "registeredBefore") {
      //   console.log("already registered user");
      this.setState({
        isAlreadyRegistered: true
      });
    }
  };

  // eslint-disable-next-line consistent-return
  render() {
    // console.log(this.state);
    const { isFirstTime, isAlreadyRegistered } = this.state;
    // eslint-disable-next-line react/prop-types
    const { history, isAuth } = this.props;
    if (!isAuth) {
      return <Redirect to={{ pathname: "/login" }} />;
    }
    if (!isFirstTime && !isAlreadyRegistered) {
      return (
        <div>
          <div className="container-fluid">
            <div className="row text-center">
              <div className="col-12 col-md-12 mt-5">
                <button
                  type="submit"
                  className="btn-xl btn-outline-secondary p-2 mx-3 my-2"
                  style={{ borderRadius: "5px" }}
                  value="newVisitor"
                  onClick={e => this.handleClick(e)}
                >
                  This is my first time here..
                </button>
              </div>
              <div className="col-12 col-md-12">
                <button
                  type="submit"
                  className="btn-xl btn-outline-secondary p-2 mx-3 my-2"
                  style={{ borderRadius: "5px" }}
                  value="registeredBefore"
                  onClick={e => this.handleClick(e)}
                >
                  I have been here before..
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (isFirstTime) {
      //   console.log("this.state.isFirstTime executed", this.props);
      // eslint-disable-next-line react/prop-types
      return <>{history.push("/visitor_registration")}</>;
    }
    if (isAlreadyRegistered) {
      // eslint-disable-next-line react/prop-types
      return <>{history.push("/email_verification")}</>;
    }
  }
}

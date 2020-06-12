import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import propTypes from "prop-types";

let timeout;

class CheckinSuccess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  componentDidMount() {
    timeout = setTimeout(() => {
      this.setState({ redirect: true });
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(timeout);
  }

  render() {
    const { redirect } = this.state;
    const { history, isAuth } = this.props;
    if (!isAuth) {
      return <Redirect to={{ pathname: "/login" }} />;
    }
    if (!redirect) {
      return (
        <>
          <div className="container-fluid text-center mt-5">
            <h2 style={{ fontFamily: "Tomorrow" }}>
              Check in Successful..!! Enjoy your visit.
            </h2>
          </div>
        </>
      );
    }
    return <>{history.push("/main_checkin_checkout")}</>;
  }
}

CheckinSuccess.defaultProps = {
  history: propTypes.object
};

CheckinSuccess.propTypes = {
  history: propTypes.object
};

export default CheckinSuccess;

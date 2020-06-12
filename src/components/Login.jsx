/* eslint-disable array-callback-return */
import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { db } from "../config/fbaseConfig";
import { loginUser } from "../redux/authentication/actions";
import ShowLoading from "./common/ShowLoading";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();
    const { history, loginUser } = this.props;
    const { email, password } = this.state;
    // if (validateSignupData(this.state)) {
    //   const userData = { email, password, history };
    //   loginUser(userData);
    // } else {
    //   alert()
    // }

    if (email === "") {
      alert("email field cannot be left empty");
    } else if (password === "") {
      alert("Password field cannot be left empty");
    } else {
      const userData = { email, password, history };
      this.props.loginUser(userData);
    }
  };

  render() {
    const { email, password } = this.state;
    const { isLoading } = this.props;
    return (
      <div>
        <p
          className="my-4 text-center"
          style={{ fontSize: "36px", fontFamily: "Herculanum" }}
        >
          Welcome to Atithi..!!
        </p>
        <form className="col-8 col-md-4 m-auto shadow bg-black rounded">
          <div className="form-group  mx-3">
            <label htmlFor="email" className="mt-3">
              Email address
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter email"
              onChange={this.handleChange}
              value={email}
              name="email"
              id="email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We&rsquo;ll never share your email with anyone else.
            </small>
          </div>

          <div className="form-group mx-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={this.handleChange}
              value={password}
              name="password"
              id="password"
            />
          </div>
          <div className="text-center mx-3">
            {!isLoading ? (
              <>
                <button
                  type="button"
                  className="btn btn-primary col-12 col-md-12 mb-3"
                  style={{ fontFamily: "Herculanum" }}
                  onClick={this.handleClick}
                >
                  LOGIN
                </button>
              </>
            ) : (
              <button
                className="btn btn-primary col-12 col-md-12 mb-3"
                type="button"
                disabled
              >
                <span
                  class="spinner-border"
                  role="status"
                  aria-hidden="true"
                  style={{ width: "1.5rem", height: "1.5rem" }}
                ></span>
                <span class="sr-only">Loading...</span>
              </button>
            )}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.authReducer.isLoading,
  isAuth: state.authReducer.isAuth
});

const mapDispatchToProps = dispatch => {
  return {
    loginUser: userData => dispatch(loginUser(userData))
  };
};

Login.defaultProps = {
  // data: propTypes.obj,
  history: propTypes.object
};

Login.propTypes = {
  // data: propTypes.objectOf,
  history: propTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

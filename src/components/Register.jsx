import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { companyRegister } from "../redux/authentication/actions";

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      mobile: "",
      password: "",
      aadharId: "",
      errorMessage: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();
    const { name, email, mobile, password, aadharId } = this.state;
    const { history, sendCompanyRegistrationDetail } = this.props;
    const userData = this.state;

    if (name.trim() === "") {
      return alert("Name field cannot be left empty");
    }
    if (email.trim() === "") {
      return alert("Email field cannot be left empty");
    }
    if (mobile.trim() === "") {
      return alert("Mobile field cannot be left empty");
    }
    if (password.trim() === "") {
      return alert("Password field cannot be left empty");
    }
    if (aadharId.trim() === "") {
      return alert("Aadhar Id field cannot be left empty");
    }
    sendCompanyRegistrationDetail(userData, history);
  };

  render() {
    const { name, email, mobile, password, aadharId } = this.state;
    const { isLoading } = this.props;

    return (
      <div className="container col-12">
        <p
          className="my-4 text-center"
          style={{ fontSize: "36px", fontFamily: "Herculanum" }}
        >
          Registration Details
        </p>
        <div className="row">
          <div className="col-8 col-md-4 m-auto shadow bg-black rounded">
            <form className="mx-3">
              <label className="m-2 mt-3" htmlFor="name">
                Company Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={this.handleChange}
                className="form-control m-2"
              />
              <label className="m-2" htmlFor="email">
                Company Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                className="form-control m-2"
              />
              <label htmlFor="comapny-name" className="m-2">
                Company Mobile Number
              </label>
              <input
                type="text"
                id="company-name"
                name="mobile"
                value={mobile}
                onChange={this.handleChange}
                className="form-control m-2"
              />
              <label htmlFor="password" className="m-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                className="form-control m-2"
              />
              <label htmlFor="document-number" className="m-2">
                Aadhar(UIDAI) Number for verification
              </label>
              <input
                type="text"
                id="document-number"
                name="aadharId"
                value={aadharId}
                onChange={this.handleChange}
                className="form-control m-2"
              />
              <br />
              {!isLoading ? (
                <input
                  type="submit"
                  onClick={this.handleClick}
                  className="m-2 mb-3 btn btn-primary text-center col-12 col-md-12 mb-3"
                />
              ) : (
                <button
                  className="btn btn-primary col-12 col-md-12 mb-3"
                  type="button"
                  disabled
                >
                  <span
                    className="spinner-border"
                    role="status"
                    aria-hidden="true"
                    style={{ width: "1.5rem", height: "1.5rem" }}
                  />
                  <span className="sr-only">Loading...</span>
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Registration.defaultProps = {
  sendCompanyRegistrationDetail() {},
  history: propTypes.object
};

Registration.propTypes = {
  sendCompanyRegistrationDetail: propTypes.func,
  history: propTypes.object
};

const mapStateToProps = state => ({
  isLoading: state.authReducer.isLoading
});

const mapDispatchToProps = dispatch => ({
  sendCompanyRegistrationDetail: (userData, history) =>
    dispatch(companyRegister(userData, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);

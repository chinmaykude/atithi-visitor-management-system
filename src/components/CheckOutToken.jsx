/* eslint-disable no-return-assign */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import propTypes from "prop-types";
import { checkoutVisitor } from "../redux/visitorRegistration/actions";

class CheckOutToken extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visitID: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    e.preventDefault();

    if (this.state.visitID.trim() === "") {
      return alert("Visit ID should not be left empty");
    }

    this.setState(prevState => ({
      visitID: prevState.visitID
    }));

    const { visitID } = this.state;
    console.log("visitID", visitID);
    const checkout_timestamp = Date.now();
    const { checkoutVisitorDestructured, history } = this.props;
    console.log("history", history);
    console.log("checkout_timestamp", checkout_timestamp);
    checkoutVisitorDestructured(visitID, checkout_timestamp, history);
  };

  render() {
    const { isVisitorCheckOutLoading, isAuth } = this.props;
    if (!isAuth) {
      return <Redirect to={{ pathname: "/login" }} />;
    }
    return (
      <>
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-8 col-md-6 m-auto">
              <p
                className="my-3"
                style={{ fontSize: "40px", fontFamily: "herculanum" }}
              >
                Checkout page
              </p>
              {!isVisitorCheckOutLoading ? (
                <>
                  <form>
                    <input
                      type="text"
                      className="form-control my-3 text-center"
                      name="visitID"
                      onChange={this.handleChange}
                      placeholder="Please enter visit ID.."
                    />
                    <button
                      type="submit"
                      className="btn btn-outline-primary mb-3"
                      onClick={this.handleClick}
                    >
                      Checkout
                    </button>
                  </form>
                </>
              ) : (
                <div class="d-flex justify-content-center ">
                  <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isVisitorCheckOutLoading: state.visitorReducer.isVisitorCheckOutLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkoutVisitorDestructured: (visitID, props, history) =>
      dispatch(checkoutVisitor(visitID, props, history))
  };
};

CheckOutToken.defaultProps = {
  history: propTypes.object,
  checkoutVisitorDestructured: propTypes.func,
  visitDetails: propTypes.object
};

CheckOutToken.propTypes = {
  history: propTypes.object,
  checkoutVisitorDestructured: propTypes.func,
  visitDetails: propTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutToken);

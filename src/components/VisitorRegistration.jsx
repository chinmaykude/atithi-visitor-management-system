import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import propTypes from "prop-types";
import { addVisitor } from "../redux/visitorRegistration/actions";
import VistorImageCapture from "./VistorImageCapture";
import { saveImageUrl } from "../redux/imageCapture/actions";
import ShowLoading from "./common/ShowLoading";

class VisitorRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      captureImage: false,
      isImageCaptured: false,
      imageUrl: "",
      visitorName: "",
      visitorEmail: "",
      visitorMobile: ""
    };
  }

  componentDidMount() {
    this.setState({
      captureImage: true
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      visitorName: "",
      visitorEmail: "",
      visitorMobile: ""
    });
    const { addVisitor, history } = this.props;
    addVisitor(this.state, history);
  };

  urlChange = url => {
    saveImageUrl(url);
    console.log(url);
    this.setState({
      isImageCaptured: true,
      imageUrl: url
    });
  };

  render() {
    const {
      isImageCaptured,
      imageUrl,
      visitorName,
      visitorEmail,
      visitorMobile
    } = this.state;

    const { isAddVisitorLoading, isAuth } = this.props;
    console.log("isAddVisitorLoading", isAddVisitorLoading);

    if (!isAuth) {
      return <Redirect to={{ pathname: "/login" }} />;
    }

    if (isImageCaptured) {
      return !isAddVisitorLoading ? (
        <>
          <div>
            <p
              className="my-4 text-center"
              style={{ fontSize: "36px", fontFamily: "herculanum" }}
            >
              Your Details Please..!!
            </p>
            <div className="text-center mb-3">
              <img
                src={imageUrl}
                alt="User Avatar"
                style={{ height: "200px", width: "200px", borderRadius: "50%" }}
              />
            </div>
            <form className="col-7 col-md-4 m-auto">
              <div className="form-group">
                Name
                <input
                  type="name"
                  name="visitorName"
                  value={visitorName}
                  onChange={this.handleChange}
                  className="form-control"
                  id="name"
                  aria-describedby="name"
                />
              </div>
              <div className="form-group">
                Email address
                <input
                  type="email"
                  name="visitorEmail"
                  value={visitorEmail}
                  onChange={this.handleChange}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We&rsquo;ll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                Mobile Number
                <input
                  type="number"
                  name="visitorMobile"
                  value={visitorMobile}
                  onChange={this.handleChange}
                  className="form-control"
                  id="mobile"
                  aria-describedby="mobile"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary col-12 col-md-6 mb-3"
                  style={{ fontFamily: "herculanum" }}
                  onClick={this.handleSubmit}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <ShowLoading label="Registration in process.." />
      );
    }
    return <VistorImageCapture urlChange={this.urlChange} />;
  }
}

VisitorRegistration.defaultProps = {
  history: propTypes.object,
  addVisitor1: propTypes.func
};

VisitorRegistration.propTypes = {
  history: propTypes.object,
  addVisitor1: propTypes.func
};

const mapStateToProps = state => ({
  isAddVisitorLoading: state.visitorReducer.isAddVisitorLoading
});

const mapDispatchToProps = dispatch => {
  return {
    addVisitor: (obj, history) => dispatch(addVisitor(obj, history))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisitorRegistration);

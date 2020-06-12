import React from "react";
import Webcam from "react-webcam";
import { connect } from "react-redux";
import { imageCaptured } from "../redux/imageCapture/actions";

const videoConstraints = {
  // width: 1280,
  // height: 720,
  facingMode: "user"
};

const VisitorImageCapture = props => {
  const webcamRef = React.useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    props.urlChange(imageSrc);
  };

  return (
    <div className="text-center">
      <div className="col-12 col-md-12 text-center">
        <h5 style={{ fontSize: "2rem", fontFamily: "Tomorrow" }}>
          Smile please..!!
        </h5>

        <Webcam
          audio={false}
          height={300}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          // width={750}
          width={window.screen.width - 40}
          videoConstraints={videoConstraints}
          style={{ borderRadius: "50%" }}
        />
      </div>
      <br />
      <button
        type="button"
        onClick={capture}
        className="btn btn-sm m-2 btn-outline-primary"
      >
        Capture photo
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    url: state.capturedUrl
  };
};

const mapDispatchToProps = dispatch => {
  return {
    isCaptured: () => dispatch(imageCaptured())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisitorImageCapture);

import React from "react";
import cameraImg from "../images/Illustrations/Other/Camera.png";
import howItWorks from "../images/Illustrations/Other/CheckInCheckOutMain.webp";

export default function HowToUseAtithi() {
  return (
    <>
      <div className="col-12 col-md-12 text-center">
        <p id="features" style={{ fontSize: "40px", fontFamily: "herculanum" }}>
          FEATURES
        </p>
        <div className="row mb-5">
          <div className="col-6 m-auto">
            <img src={cameraImg} alt="" />
            <p className="col-12" width="200px">
              <ul
                className="list-unstyled"
                style={{ fontSize: "1.5rem", fontFamily: "Tomorrow" }}
              >
                <hr />
                <li className="">
                  Contactless front desk check-in for your visitors
                  <hr />
                </li>
                <li className="">
                  Improve safety, security, and compliance for your visitors,
                  contractors, staff, and assets.
                  <hr />
                </li>
                <li className="">
                  Geofence your site, check-in visitors, and receive instant
                  notifications using Atithi app.
                  <hr />
                </li>
                <li className="">
                  Dynamic dashboard
                  <hr />
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-12 text-center mb-3">
        <p
          id="how-atithi-works"
          className="mb-3"
          style={{ fontSize: "40px", fontFamily: "herculanum" }}
        >
          HOW ATITHI WORKS
        </p>
        <div className="row">
          <div className="col-12 m-auto" style={{ overflowX: "scroll" }}>
            <img className="mb-5" src={howItWorks} alt="how it works" />
          </div>
        </div>
      </div>
      <footer className="col-12 text-center mt-2 mb-3">
        All rights reserved.
      </footer>
    </>
  );
}

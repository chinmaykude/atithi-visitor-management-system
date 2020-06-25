import React from "react";
import { Link } from "react-router-dom";
import illustration from "../images/Illustrations/Onboarding/2.png";

export default function ProductInfoJumbotron() {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <p
                className="text-left mb-1"
                color="4A73C5"
                style={{ fontSize: "40px", fontFamily: "herculanum" }}
              >
                Atithi
              </p>
              <p
                className="text-left mb-4"
                color="4A73C5"
                style={{ fontSize: "20px", fontFamily: "herculanum" }}
              >
                Cloud based - Visitor Management System
              </p>
              <p
                className="text-left"
                style={{ fontSize: "16px", fontFamily: "Tomorrow" }}
              >
                Smoothen your guest&rsquo;s arrival through digitized check in.
                <br /> Make the process of check-in shift from messy paper work
                to an organized digital process.
              </p>
              <div className="col-12 col-md-6 text-left mt-5">
                <Link
                  to="/register"
                  type="button"
                  className="btn btn-primary mx-2"
                  style={{ fontSize: "16px", fontFamily: "herculanum" }}
                >
                  REGISTER
                </Link>
                <a href="#how-atithi-works">
                  <button
                    type="button"
                    className="btn btn-outline-primary mx-2"
                    style={{ fontSize: "16px", fontFamily: "herculanum" }}
                  >
                    HOW ATITHI WORKS!
                  </button>
                </a>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <img src={illustration} alt="Illustration" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

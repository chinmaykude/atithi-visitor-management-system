import React from "react";
import { Link } from "react-router-dom";
import "./NoMatch.css";

const NoMatch = () => {
  return (
    <>
      <div className="container text-center mt-5 noMatchfont">
        <div className="noMatchHeader">
          <h4>Looking for something? </h4>
        </div>
        <div>
          <p>
            We're sorry. The Web address you entered is not a functioning page
            on our site.
          </p>
        </div>
        <div>
          <Link to="/" className="btn btn-outline-primary">
            Navigate Back To Home Page
          </Link>
        </div>
      </div>
    </>
  );
};

export default NoMatch;

import React from "react";

const NewVisitDetails = ({
  imageUrl,
  visitorName,
  handleChange,
  handleClick
}) => {
  return (
    <>
      <div className="container-fluid text-center">
        <p
          className="my-4"
          style={{ fontSize: "36px", fontFamily: "herculanum" }}
        >
          Visit Details Please..!!
        </p>
        <div className="row mt-5">
          <div className="col-12 col-md-4">
            <img
              style={{
                borderRadius: " 50% ",
                width: "150px",
                height: "150px"
              }}
              src={imageUrl}
              alt="User Avatar"
            />
          </div>
          <div className="col-12 col-md-8">
            <p
              className="text-left"
              style={{ fontSize: "30px", fontFamily: "Tomorrow" }}
            >
              Welcome, {visitorName}
            </p>
            <div className="text-center">
              <select
                className="col-6 col-md-3 btn-lg btn-outline-primary mx-2 my-2"
                name="visitType"
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Visit Type
                </option>
                <option value="Meeting">Meeting</option>
                <option value="Interview">Interview</option>
                <option value="Others">Others</option>
              </select>
              <select
                className="col-6 col-md-3 btn-lg btn-outline-primary mx-2 my-2"
                name="companyName"
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Company Name
                </option>
                <option value="Masai School">Masai School</option>
                <option value="Human-X">Human-X</option>
              </select>
              <select
                className="col-6 col-md-3 btn-lg btn-outline-primary mx-2 my-2"
                name="whomToMeet"
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Whom To Meet
                </option>
                <option value="Nrupul">Nrupul</option>
                <option value="Yogesh">Yogesh</option>
                <option value="Albert">Albert</option>
              </select>
            </div>
            <div className="text-center mt-3">
              <button
                type="button"
                className=" col-6 col-md-5 btn btn-primary"
                onClick={handleClick}
              >
                Check In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewVisitDetails;

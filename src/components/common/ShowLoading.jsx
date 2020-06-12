import React from "react";

const ShowLoading = ({ label }) => {
  return (
    <>
      <div class="text-center mt-5" style={{ fontFamily: "Tomorrow" }}>
        <h3>{label}</h3>
        <br />
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
};
export default ShowLoading;

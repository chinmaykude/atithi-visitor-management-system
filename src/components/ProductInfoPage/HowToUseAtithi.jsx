import React from "react";
import cameraImg from "../../components/images/Illustrations/Other/Camera.png";
import shieldImg from "../../components/images/Illustrations/Other/Verify.png";

export default function HowToUseAtithi() {
  return (
    <>
      <div className="col-12 col-md-12 text-center">
        <p
          id="how-atithi-works"
          style={{ fontSize: "40px", fontFamily: "herculanum" }}
        >
          HOW ATITHI WORKS
        </p>
        <div className="row mb-5">
          <div className="col-6 m-auto">
            <img src={cameraImg} alt="" />
            <p className="" width="200px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, reprehenderit. Explicabo illum dolor reprehenderit at
              ullam est deleniti quidem, alias magnam distinctio quod ratione
              exercitationem reiciendis, quas sequi nam eveniet.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-6 m-auto">
            <img src={shieldImg} alt="" />
            <p className="" width="200px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, reprehenderit. Explicabo illum dolor reprehenderit at
              ullam est deleniti quidem, alias magnam distinctio quod ratione
              exercitationem reiciendis, quas sequi nam eveniet.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

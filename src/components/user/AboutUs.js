import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import JiuJitsu from "../../img/image-asset(11).jpeg";

const AboutUs = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          height: "150px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          marginTop: "70px",
        }}
      >
        <h1
          className="text-center"
          style={{ fontSize: "70px", fontWeight: "bold" }}
        >
          About Us
        </h1>
        <img src={JiuJitsu} alt="jiujitsu..." />
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <h2
          className="text-center"
          style={{ fontSize: "40px", fontWeight: "bold" }}
        >
          CAVEIRINHA JIU-JITSU FAMILY (CJJF) IS A CULMINATION OF OVER 25 YEARS
          OF EXPERIENCE
        </h2>
      </div>
    </>
  );
};

export default AboutUs;

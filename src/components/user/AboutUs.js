import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import JiuJitsu from "../../img/image-asset(11).jpeg";

const AboutUs = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          height: "auto",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "0",
        }}
      >
        <img
          src={JiuJitsu}
          alt="jiujitsu..."
          style={{ width: "100vw", height: "auto" }}
        />
      </div>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ marginBottom: "50px" }}
      >
        <h1
          className="text-center"
          style={{ fontSize: "70px", fontWeight: "bold" }}
        >
          About Us
        </h1>
        <h2
          className="text-center"
          style={{ fontSize: "30px", fontWeight: "bold", marginTop: "10px" }}
        >
          CAVEIRINHA JIU-JITSU FAMILY (CJJF) IS A CULMINATION OF OVER 25 YEARS
          OF EXPERIENCE
        </h2>
      </div>
    </>
  );
};

export default AboutUs;

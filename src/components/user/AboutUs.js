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
          style={{
            width: "60vw",
            height: "auto",
            border: "1px solid",
            borderRadius: "5px",
          }}
        />
      </div>
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center"
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
          style={{ fontSize: "30px", fontWeight: "bold", margin: "20px" }}
        >
          CAVEIRINHA JIU-JITSU FAMILY (CJJF) IS A CULMINATION OF OVER 25 YEARS
          OF EXPERIENCE
        </h2>
        <h3 style={{ fontWeight: "bold" }}>
          Building strong bonds through the gentle art around the world.
        </h3>
        <p style={{ margin: "20px", fontSize: "20px" }}>
          With over 65+ academies spread throughout the globe, CJJF Texas became
          the first academy in the Lone Star State. Our mission is to enhance
          the lives of all men, women, and children within our community by
          purposefully helping them become the best version of themselves.
        </p>
        <p style={{ margin: "20px", fontSize: "20px" }}>
          Our Brazilian Jiu-Jitsu classes serve as an excellent resource for
          parents to outsource adversity children need to experience in a safe,
          fun, and structured environment. Proven to be an exceptional form of
          self-defense, exercise and fitness, our martial arts program aims to
          develop strong core values and social skills necessary to succeed in
          all aspects of life.
        </p>
      </div>
    </>
  );
};

export default AboutUs;

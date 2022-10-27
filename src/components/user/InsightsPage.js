import React from "react";
import AddSession from "../main/AddSession/AddSession";
import SessionCard from "../main/SessionCard/SessionCard";
import "bootstrap/dist/css/bootstrap.min.css";

const InsightsPage = () => {
  return (
    <div
      style={{
        backgroundColor: "#A11F22",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 style={{ fontSize: "30px", color: "white" }}>Insights</h2>
      <div
        style={{
          backgroundColor: "white",
          width: "95vw",
          height: "95vh",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AddSession />
          <SessionCard />
        </div>
      </div>
    </div>
  );
};

export default InsightsPage;

import React from "react";
import AddTechnique from "../main/AddTechnique/AddTechnique";
import TechniqueCard from "../main/TechniqueCard/TechniqueCard";

const Techniques = () => {
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
      <h2 style={{ fontSize: "30px", color: "white" }}>Techniques</h2>
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
          <AddTechnique />
          <TechniqueCard />
        </div>
      </div>
    </div>
  );
};

export default Techniques;

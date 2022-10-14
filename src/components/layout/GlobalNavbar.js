import React from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./GlobalNavbar.module.css";
import "../../App.css";

// import { Link } from "react-router-dom";

const GlobalNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">
        <img
          className={classes["nav-img"]}
          src="https://images.squarespace-cdn.com/content/v1/5f397a9fd91c034186b2a4aa/1602964657927-1GZWNZCV6O8XMIRARAJW/CJJF-TX.PNG?format=1500w"
          alt="logo..."
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Insights
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Techniques
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default GlobalNavbar;

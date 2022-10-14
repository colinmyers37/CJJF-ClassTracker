import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./GlobalNavbar.module.css";
import "../../App.css";

// import { Link } from "react-router-dom";

const GlobalNavbar = () => {
  return (
    <Navbar
      bg="light"
      variant="light"
      sticky="top"
      expand="sm"
      collapseOnSelect
    >
      <Navbar.Brand>
        <img
          className={classes["nav-img"]}
          src="https://images.squarespace-cdn.com/content/v1/5f397a9fd91c034186b2a4aa/1602964657927-1GZWNZCV6O8XMIRARAJW/CJJF-TX.PNG?format=1500w"
          width="auto"
          alt="logo..."
        />{" "}
      </Navbar.Brand>

      <Navbar.Toggle className="coloring" />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link href="#">About Us</Nav.Link>
          <Nav.Link href="#">Insights</Nav.Link>
          <Nav.Link href="#">Techniques</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default GlobalNavbar;

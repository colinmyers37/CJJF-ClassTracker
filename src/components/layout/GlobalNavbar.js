import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./GlobalNavbar.module.css";
import { Button } from "bootstrap";
import "../../App.css";
import { authActions } from "../../store/authSlice.js";
import { useDispatch } from "react-redux";

const GlobalNavbar = () => {
  // const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
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
          <NavLink to="/aboutus" className={classes["nav-link"]}>
            About Us
          </NavLink>

          <NavLink to="/insights" className={classes["nav-link"]}>
            Insights
          </NavLink>

          <NavLink to="/techniques" className={classes["nav-link"]}>
            Techniques
          </NavLink>
          <NavLink
            to="/"
            className={classes["nav-link"]}
            onClick={logoutHandler}
          >
            Logout
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default GlobalNavbar;

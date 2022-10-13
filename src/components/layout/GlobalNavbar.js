import React from "react";
import { Navbar, Nav, NavDropdown, Form } from "react-bootstrap";

import { Link } from "react-router-dom";

const GlobalNavbar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      bg="light"
      variant="light"
      className="mb-3"
    >
      <Navbar.Brand as={Link} to="/" className="mx-3">
        CJJF Tracker
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/discover">
            Lists
          </Nav.Link>
          <Nav.Link as={Link} to="/plays">
            Plays
          </Nav.Link>
          <NavDropdown title="Collection" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/owned">
              Owned
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/wishlist">
              Wishlist
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Form inline className="mx-3"></Form>
    </Navbar>
  );
};

export default GlobalNavbar;

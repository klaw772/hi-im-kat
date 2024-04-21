import React, { FC } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

const NavBar: FC<unknown> = () => {
  return (
      <Navbar expand="lg" className="nav-width mx-auto">
          <Navbar.Brand href="/hi-im-kat">
            <strong>KL</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
          >
            <Nav className="ms-auto">
              <Nav.Link
                className="me-3 hvr-overline-from-left"
                as={Link}
                to="/about-me"
              >
                About Me
              </Nav.Link>
              <Nav.Link
                className="me-3 hvr-overline-from-left"
                as={Link}
                to="/recent-experience"
              >
                Recent Experience
              </Nav.Link>
              <Nav.Link
                className="me-3 hvr-overline-from-left"
                as={Link}
                to="/skills"
              >
                Skills/Technologies
              </Nav.Link>
              <Nav.Link
                className="me-3 hvr-overline-from-left"
                as={Link}
                to="/contact"
              >
                Contact Me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
  );
};

export default NavBar;

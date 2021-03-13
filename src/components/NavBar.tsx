import React, { FC } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import cheese from "../assets/cheese2.png";

const NavBar: FC<unknown> = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Brand href="/hi-im-kat">
          <img src={cheese} alt="cheese-wedge" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              className="mr-3 hvr-overline-from-left"
              as={Link}
              to="/about-kat"
            >
              About Kat
            </Nav.Link>
            <Nav.Link
              className="mr-3 hvr-overline-from-left"
              as={Link}
              to="/kat-work"
            >
              Experience
            </Nav.Link>
            <Nav.Link
              className="mr-3 hvr-overline-from-left"
              as={Link}
              to="/skills"
            >
              Skills/Technologies
            </Nav.Link>
            <Nav.Link
              className="mr-3 hvr-overline-from-left"
              as={Link}
              to="/contact"
            >
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;

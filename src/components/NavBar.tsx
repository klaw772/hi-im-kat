import React, { FC } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../styles/NavBar.css";
import classNames from "classnames";
import { Link } from "react-router-dom";
import cheese from "../assets/cheese2.png";

export interface NavBarProps {
  index: number;
}

const NavBar: FC<NavBarProps> = ({ index }) => {
  return (
    <div>
      <Navbar
        className={classNames({
          "acquia-style": index === 0,
          "ezcater-style": index === 1,
        })}
        expand="lg"
      >
        <Navbar.Brand
          className={classNames({
            "acquia-brand": index === 0,
            "ezcater-brand": index === 1,
          })}
          href="/hi-im-kat"
        >
          <img src={cheese} alt="cheese-wedge" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="mr-3" as={Link} to="/about-kat">
              About Kat
            </Nav.Link>
            <Nav.Link className="mr-3" as={Link} to="/kat-work">
              Work Experiences
            </Nav.Link>
            <Nav.Link className="mr-3" as={Link} to="/project-index">
              Project Work
            </Nav.Link>
            <Nav.Link className="mr-3" as={Link} to="/skills">
              Skills/Technologies
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;

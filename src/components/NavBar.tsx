import React, { FC } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../styles/NavBar.css";
import classNames from "classnames";
import {Link} from 'react-router-dom';

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
          href="/"
        >
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/about-kat">
              About Kat
            </Nav.Link>
            <Nav.Link as={Link} to="/kat-work">
              Work Experiences
            </Nav.Link>
            <Nav.Link as={Link} to="/project-index">
              Project Work
            </Nav.Link>
            <Nav.Link as={Link} to="/skills">
              Skills
            </Nav.Link>
            <Nav.Link href="https://github.com/klaw772/" target="_blank">
              GitHub
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;

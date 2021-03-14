import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import "../../styles/Contact/ContactIcons.css";

export const ContactIcons = () => {
  return (
    <Row className="d-flex justify-content-center align-items-center">
      <Col
        xs={12}
        sm={12}
        md={12}
        lg={2}
        className="d-flex justify-content-center align-items-center"
      >
        <span className="icon">
          <FaGithub />
          klaw772
        </span>
      </Col>
      <Col
        xs={12}
        sm={12}
        md={12}
        lg={2}
        className="d-flex justify-content-center align-items-center"
      >
        <span className="icon">
          <FaLinkedin />
          Kathleen Law
        </span>
      </Col>
      <Col
        xs={12}
        sm={12}
        md={12}
        lg={2}
        className="d-flex justify-content-center align-items-center"
      >
        <span className="icon">
          <FaEnvelope />
          KathleenMLaw1@gmail.com
        </span>
      </Col>
      <Col
        xs={12}
        sm={12}
        md={12}
        lg={2}
        className="d-flex justify-content-center align-items-center"
      >
        <span className="icon">
          <FaTwitter />
          @KatLawDev
        </span>
      </Col>
      <Col
        xs={12}
        sm={12}
        md={12}
        lg={2}
        className="d-flex justify-content-center align-items-center"
      >
        <span className="icon">
          <FaInstagram />
          @kat_likes_to_read
        </span>
      </Col>
    </Row>
  );
};

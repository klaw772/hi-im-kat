import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaGithub,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";
import "../../styles/Contact/ContactIcons.css";

export const ContactIcons = () => {
  return (
    <Row className="d-flex justify-content-center align-items-center">
      <Col
        xs={12}
        sm={6}
        md={4}
        lg={2}
        className="d-flex justify-content-center align-items-center"
      >
        <span className="iconSpan">
          <FaGithub
            className="icon hvr-grow"
            onClick={() => {
              window.open("https://github.com/klaw772", "_blank");
            }}
          />
          klaw772
        </span>
      </Col>
      <Col
        xs={12}
        sm={6}
        md={4}
        lg={2}
        className="d-flex justify-content-center align-items-center"
      >
        <span className="iconSpan">
          <FaLinkedin
            className="icon hvr-grow"
            onClick={() => {
              window.open("https://linkedin.com/in/kat-law", "_blank");
            }}
          />
          Kat Law
        </span>
      </Col>
      <Col
        xs={12}
        sm={6}
        md={4}
        lg={2}
        className="d-flex justify-content-center align-items-center"
      >
        <span className="iconSpan">
          <FaEnvelope
            className="icon hvr-grow"
            onClick={() => {
              window.open("mailto:KathleenMLaw1@gmail.com");
            }}
          />
          KathleenMLaw1@gmail.com
        </span>
      </Col>
    </Row>
  );
};

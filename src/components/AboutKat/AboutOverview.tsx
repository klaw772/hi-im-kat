import React, { FC } from "react";
import { Col, Row } from "react-bootstrap";

import "../../styles/AboutKat/AboutOverview.css";
import { Link, Outlet } from "react-router-dom";

export const AboutOverview: FC<unknown> = () => {
  return (
    <div>
  
        <div className="aboutMeContainer">
          <h1 className="aboutMeHeader">About Me</h1>
          <p>
            I like to think of myself as a versatile human; I absolutely LOVE
            learning new things and trying new hobbies. After reflecting for a
            little bit, the 4 categories below, as of right now, excite me the
            most. Click any of the categories to learn more. :)
          </p>
          <Row className="my-5 d-flex justify-content-center align-items-center">
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={3}
              className="d-flex justify-content-center align-items-center"
            >
              <Link to="learning-interests">
                <h2 className="hvr-grow">Learning Interests</h2>
              </Link>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={3}
              className="d-flex justify-content-center align-items-center"
            >
              <Link to="/about-me/books-of-note">
                <h2 className="hvr-grow">Books of Note</h2>
              </Link>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={3}
              className="d-flex justify-content-center align-items-center"
            >
              <Link to="/about-me/model-building">
                <h2 className="hvr-grow">Model-Building</h2>
              </Link>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={3}
              className="d-flex justify-content-center align-items-center"
            >
              <Link to="/about-me/bertha">
                <h2 className="hvr-grow">Bertha</h2>
              </Link>
            </Col>
          </Row>
        </div>
        <Outlet />
        </div>
  );
};

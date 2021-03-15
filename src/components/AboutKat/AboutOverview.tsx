import React, { FC } from "react";
import { Col, Row } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";

import "../../styles/AboutKat/AboutOverview.css";
import { Bertha } from "./Bertha";
import { BooksOfNote } from "./BooksOfNote";
import { LearningInterests } from "./LearningInterests";
import { ModelBuilding } from "./ModelBuilding";

export const AboutOverview: FC<unknown> = () => {
  return (
    <div className="aboutMeContainer">
      <h1 className="aboutMeHeader">About Me</h1>
      <p>
        I like to think of myself as a versatile human; I absolutely LOVE
        learning new things and trying new hobbies. After reflecting for a
        little bit, the 4 categories below, as of right now, excite me the most.
      </p>
      <Row className="my-4 d-flex justify-content-center align-items-center">
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={3}
          className="d-flex justify-content-center align-items-center"
        >
          <Link to="#learning-interests">
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
          <Link to="#books-of-note">
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
          <Link to="#model-building">
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
          <Link to="#bertha">
            <h2 className="hvr-grow">Bertha</h2>
          </Link>
        </Col>
      </Row>
      <div className="aboutMeDetailBlock" id="learning-interests">
        <h4>Learning Interests</h4>
        <LearningInterests />
      </div>
      <div className="aboutMeDetailBlock" id="books-of-note">
        <h4>Books of Note</h4>
        <BooksOfNote />
      </div>
      <div className="aboutMeDetailBlock" id="model-building">
        <h4>Model-Building</h4>
        <ModelBuilding />
      </div>
      <div className="aboutMeDetailBlock" id="bertha">
        <h4>Bertha</h4>
        <Bertha />
      </div>
    </div>
  );
};

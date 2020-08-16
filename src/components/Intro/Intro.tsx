import React, { FC } from "react";
import { Jumbotron, Container } from "react-bootstrap";

import "../../styles/Intro/Intro.css";
import cheese from '../../assets/cheese2.png';

export const Intro: FC<unknown> = () => {
  return (
    <Jumbotron fluid className="intro-jumbotron">
      <Container className="my-5">
        <h1>
          <span className="mr-2">
            <img src={cheese} alt="cheese-wedge" />
          </span>
          Hi, I'm Kat.
        </h1>
        <p>This website is a work in progress (for now). :)</p>
      </Container>
    </Jumbotron>
  );
};

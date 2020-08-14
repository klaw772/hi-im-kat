import React, { FC } from "react";
import { Jumbotron, Container } from "react-bootstrap";

import "../../styles/Intro/Intro.css";

export const Intro: FC<unknown> = () => {
  return (
    <Jumbotron fluid className="intro-jumbotron">
      <Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <h1>Hi, I'm Kat.</h1>
        <p>This website is a work in progress (for now). :)</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Container>
    </Jumbotron>
  );
};

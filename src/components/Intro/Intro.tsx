import React, { FC } from "react";
import { Jumbotron, Container } from "react-bootstrap";
import kat from "../../assets/kat.png";

import "../../styles/Intro/Intro.css";

export const Intro: FC<unknown> = () => {
  return (
    <Jumbotron fluid className="intro-jumbotron">
      <Container className="my-5">
        <div className="jumbotron-text fade-in">
          <h1> Hi, I'm Kat.</h1>
          <p>
            I am a software engineer, a bibliophile, and a connoisseur of some
            of the finer things in life (memes, cheeses, that sort of thing).
          </p>
          <p>Thanks for dropping by!</p>
          <div className="d-flex justify-content-center align-items-center">
            <img className="kat-avatar" src={kat} alt="Kat" />
          </div>
        </div>
      </Container>
    </Jumbotron>
  );
};

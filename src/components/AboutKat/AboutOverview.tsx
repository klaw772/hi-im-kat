import React, { FC } from "react";
import { Button } from "react-bootstrap";

import "../../styles/AboutKat/AboutOverview.css";

export const AboutOverview: FC<unknown> = () => {
  return (
    <div>
      <h1 className="aboutMeHeader">About Me</h1>
      <div className="buttonsRow">
        <Button className="styledOverviewButton">Learning Interests</Button>
        <Button className="styledOverviewButton">Books of Note</Button>
      </div>
      <div className="buttonsRow">
        <Button className="styledOverviewButton">Model-Building</Button>
        <Button className="styledOverviewButton">Bertha</Button>
      </div>
    </div>
  );
};

import React, { FC } from "react";
import { Button } from "react-bootstrap";

import "../../styles/AboutKat/AboutOverview.css";

export const AboutOverview: FC<unknown> = () => {
  return (
    <div>
      <h1 className="aboutMeHeader">About Me</h1>
      <div className="buttonsRow">
        <Button className="styledOverviewButton hvr-grow">
          Learning Interests
        </Button>
        <Button className="styledOverviewButton hvr-grow">Books of Note</Button>
      </div>
      <div className="buttonsRow">
        <Button className="styledOverviewButton hvr-grow">
          Model-Building
        </Button>
        <Button className="styledOverviewButton hvr-grow">Bertha</Button>
      </div>
    </div>
  );
};

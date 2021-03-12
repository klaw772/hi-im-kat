import React, { FC } from "react";
import kat from "../../assets/kat.png";

import "../../styles/AboutKat/AboutOverview.css";

export const AboutOverview: FC<unknown> = () => {
  return (
    <div className="d-flex flex-row justify-content-center">
      <div className="d-flex mx-5 my-3 flex-column justify-content-between">
        <p>Learning Interests</p>
        <p>Foodies</p>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <img className="kat-avatar" src={kat} alt="Kat" />
      </div>
      <div className="d-flex mx-5 my-3 flex-column justify-content-between">
        <p>Model-Building</p>
        <p>Bertha</p>
      </div>
    </div>
  );
};

import React, { FC, useEffect } from "react";
import kat from "../../assets/kat.png";

import "../../styles/AboutKat/AboutOverview.css";

export interface AboutOverviewProps {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}
export const AboutOverview: FC<AboutOverviewProps> = ({ setIndex }) => {
  useEffect(() => {
    setIndex(0);
  });
  return (
    <div className="d-flex flex-row justify-content-center">
      <div className="d-flex mx-5 my-3 flex-column justify-content-between">
        <p>Academic Interests</p>
        <p>Foodies</p>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <img className="kat-avatar" src={kat} alt="Kat" />
      </div>
      <div className="d-flex mx-5 my-3 flex-column justify-content-between">
        <p>Memes</p>
        <p>Fun Things</p>
      </div>
    </div>
  );
};

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
    <div className="d-flex justify-content-center">
      <img className="kat-avatar" src={kat} alt="Kat" />
    </div>
  );
};

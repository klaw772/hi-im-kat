import React, { FC } from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

import "../../styles/Skills/SkillsIcon.css";

export interface SkillsIconProps {
  tech: string;
  title: string;
}
const renderTooltip = (title: string) => (
  <Tooltip id="button-tooltip" className="skills-tooltip">
    {title}
  </Tooltip>
);
export const SkillsIcon: FC<SkillsIconProps> = ({ tech, title }) => {
  return (
    <OverlayTrigger placement="top" overlay={renderTooltip(title)}>
      <img
        className="hvr-bounce-in my-5"
        src={tech}
        alt={`${title}`}
        width="50%"
      />
    </OverlayTrigger>
  );
};

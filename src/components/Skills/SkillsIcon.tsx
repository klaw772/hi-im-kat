import React, { FC } from 'react';

import "../../styles/Skills/SkillsIcon.css";

export interface SkillsIconProps {
    tech: string;
    title: string;
}
export const SkillsIcon: FC<SkillsIconProps> = ({tech, title}) => {
    return (
      <img className="hvr-bounce-in my-5" src={tech} alt={`${title}`} width="75%"/>
    );
}
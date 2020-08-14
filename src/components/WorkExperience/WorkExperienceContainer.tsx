import React, { FC } from "react";
import { ExperienceCarousel } from "./ExperienceCarousel";

export interface WorkExperienceContainerProps {
  index: number;
  handleSelect: (eventKey: number, event: object | null) => void;
}
export const WorkExperienceContainer: FC<WorkExperienceContainerProps> = ({
  index,
  handleSelect,
}) => {
  return <ExperienceCarousel index={index} handleSelect={handleSelect} />;
};

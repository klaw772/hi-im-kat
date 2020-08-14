import React, { FC } from "react";
import { Carousel } from "react-bootstrap";
import ezcater_logo from "../../assets/ezcater.jpg";
import acquia_logo from "../../assets/acquia.png";

import "../../styles/WorkExperience/ExperienceCarousel.css";

export interface ExperienceCarouselProps {
  index: number;
  handleSelect: (eventKey: number, event: object | null) => void;
}

export const ExperienceCarousel: FC<ExperienceCarouselProps> = ({
  index,
  handleSelect,
}) => {
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="work-carousel-item">
        <img
          className="d-block w-100"
          style={{ height: "50%" }}
          src={acquia_logo}
          alt="Acquia"
        />

        <Carousel.Caption>
          <h3>Acquia</h3>
          <p>May 2020 - Present</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="work-carousel-item">
        <img
          className="d-block w-100"
          style={{ height: "50%" }}
          src={ezcater_logo}
          alt="ezCater"
        />
        <Carousel.Caption>
          <h3>ezCater</h3>
          <p>July 2019 - April 2020</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

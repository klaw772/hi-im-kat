import React, { FC, useState } from "react";
import { Carousel } from "react-bootstrap";
import ezcater_logo from "../../assets/experienceLogos/ezcater.jpg";
import acquia_logo from "../../assets/experienceLogos/acquia.png";
import njpc_logo from "../../assets/experienceLogos/njpc.png";

import "../../styles/WorkExperience/ExperienceCarousel.css";

export const ExperienceCarousel: FC<unknown> = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (
    selectedIndex: number,
    e: Record<string, unknown> | null
  ) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="experienceCarousel"
      >
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-50 ml-auto mr-auto"
            src={acquia_logo}
            alt="Acquia"
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-50 ml-auto mr-auto"
            src={njpc_logo}
            alt="New Jersey Parents Caucus"
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-50 ml-auto mr-auto"
            src={ezcater_logo}
            alt="ezCater"
          />
        </Carousel.Item>
      </Carousel>
      <div>
        {index === 0 && (
          <>
            <div className="experienceDescriptionHeader">
              <h1>Acquia</h1>
              <h2>Associate Software Engineer</h2>
              <h4>May 2020 - present</h4>
            </div>
            <div className="experienceDescriptionDetails">
              <ul>
                <li>
                  Currently contributing to the Customer Experience API, used by
                  Acquia's Cloud Platform to support the hosting, maintenance,
                  and overall development workflow of Drupal sites (PHP)
                </li>
                <li>
                  Currently participating in the Research and Development
                  Culture Committee, which aims to promote happiness and
                  satisfaction throughout the R&D organization
                </li>
                <li>
                  Created tooling to assist in speeding up the process of
                  migrating sites from Drupal 7 to Drupal 9 by up to 50% (PHP,
                  Drupal, Linux shell scripting)
                </li>
                <li>
                  Contributed to a new full-stack project with additional
                  microservices from the ground up (React, GraphQL, NodeJS)
                  while mentoring an intern, who also completed tickets as part
                  of the team
                </li>
                <li>
                  Contributed to a proof-of-concept to improve the
                  out-of-the-box developer experience
                </li>
              </ul>
            </div>
          </>
        )}
        {index === 1 && (
          <>
            <div className="experienceDescriptionHeader">
              <h1>New Jersey Parents Caucus</h1>
              <h2>Volunteer Front End Developer</h2>
              <h4>October 2020 - present</h4>
            </div>
            <div className="experienceDescriptionDetails">
              <ul>
                <li>
                  Currently contributing to the Online Parents' Empowerment
                  Academy website, used by parents to sign up for classes,
                  complete surveys, and receive training resources (React,
                  Node.js, Firebase)
                </li>
                <li>
                  Currently mentoring another front-end developer on the team,
                  answering any questions and providing guidance on best
                  practices and architecture decisions made for the project
                </li>
              </ul>
            </div>
          </>
        )}
        {index === 2 && (
          <>
            <div className="experienceDescriptionHeader">
              <h1>ezCater</h1>
              <h2>Associate Software Engineer</h2>
              <h4>July 2019 - April 2020</h4>
            </div>
            <div className="experienceDescriptionDetails">
              <ul>
                <li>
                  Implemented full-stack features for the ezManage suite as part
                  of a cross-functional team, enabling thousands of caterers to
                  seamlessly keep track of submitted orders, view customer
                  information, and manage and submit offline orders (React,
                  GraphQL, Ruby on Rails)
                </li>
                <li>
                  Participated in a pilot software development bootcamp with
                  coursework in Ruby on Rails, React, and GraphQL
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
};

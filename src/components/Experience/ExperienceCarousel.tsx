import React, { FC, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ezcater_logo from "../../assets/experienceLogos/ezcater.jpg";
import acquia_logo from "../../assets/experienceLogos/acquia.png";
import njpc_logo from "../../assets/experienceLogos/njpc.png";
import multiverse_logo from "../../assets/experienceLogos/multiverse.jpg";

import "../../styles/Experience/ExperienceCarousel.css";

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
      <div className="experienceIntro">
        <h1>Recent Experience</h1>
        <p>
          More information can be found on my{" "}
          <a
            href="https://linkedin.com/in/kat-law"
            target="__blank"
            style={{ textDecoration: "none" }}
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
      <Carousel
        activeIndex={index}
        interval={null}
        onSelect={handleSelect}
        className="experienceCarousel"
      >
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-50 mx-auto"
            src={multiverse_logo}
            alt="Multiverse"
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-50 mx-auto"
            src={acquia_logo}
            alt="Acquia"
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-50 mx-auto"
            src={njpc_logo}
            alt="New Jersey Parents Caucus"
          />
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-50 mx-auto"
            src={ezcater_logo}
            alt="ezCater"
          />
        </Carousel.Item>
      </Carousel>
      <div>
        {index === 0 && (
          <>
            <div className="experienceDescriptionHeader">
              <h1>Multiverse</h1>
              <h2>Software Engineering Instructor</h2>
            </div>
            <div className="experienceDescriptionDetails">
              <ul>
                <li>
                  Teaching software engineering apprentices a high-quality,
                  industry-standard set of full-stack web development skills to
                  ensure their success at their employer and beyond
                </li>
                <li>
                  Spearheading initiatives to make the software engineering
                  coaching experience more delightful and efficient, including
                  evangelizing GitHub Classroom through a global professional
                  development session, as well as creating language-agnostic
                  resources to support apprentices' continued learning while
                  they're on the job
                </li>
                <li>
                  Codifying processes used to effectively facilitate bootcamp,
                  the first 12 weeks of instruction during the US software
                  engineering apprenticeship program
                </li>
              </ul>
            </div>
          </>
        )}
        {index === 1 && (
          <>
            <div className="experienceDescriptionHeader">
              <h1>Acquia</h1>
              <h2>
                Associate Software Engineer to Software Engineer to Engineering
                Manager
              </h2>
            </div>
            <div className="experienceDescriptionDetails">
              <ul>
                <li>
                  Led a globally distributed team to deliver new features and
                  addi- tional stability for Code Studio, Acquia's solution for
                  automating DevOps processes for Drupal sites
                </li>
                <li>
                  Contributed to the Customer Experience API and UI teams as the
                  department's first full-stack engineer, supporting Acquia's
                  Cloud Platform to ensure successful hosting, maintenance, and
                  overall development workflow of Drupal sites (Angular, PHP)
                </li>
                <li>
                  Led efforts to improve the DevOps process for a monorepo
                  shared by multiple teams (Angular)
                </li>
                <li>
                  Collaborated with the User Experience team to iterate on the
                  Acquia Design System, aiming to unify user interfaces across
                  the engineering organization (Angular, HTML/CSS)
                </li>
                <li>
                  Enhanced Acquia's CLI tool to improve the experience of
                  developers and enterprise customers when setting up non-legacy
                  email services for Drupal sites (PHP)
                </li>
                <li>
                  Participated in the Research and Development Culture
                  Committee, which aims to promote happiness and satisfaction
                  throughout the R&D organization
                </li>
                <li>
                  Created tooling to assist in speeding up the process of
                  migrating sites from Drupal 7 to Drupal 9 by up to 50% (PHP,
                  Drupal, Linux shell scripting)
                </li>
                <li>
                  Developed a proof-of-concept leading to the implementation and
                  launch of Acquia's newest product, Code Studio (Linux shell
                  scripting, CI/CD)
                </li>
                <li>
                  Contributed to a new full-stack project with additional
                  microservices from the ground up (React, GraphQL, NodeJS)
                  while mentoring an intern, who also completed tickets as part
                  of the team
                </li>
              </ul>
            </div>
          </>
        )}
        {index === 2 && (
          <>
            <div className="experienceDescriptionHeader">
              <h1>New Jersey Parents Caucus</h1>
              <h2>Volunteer Front End Developer to Volunteer Technical Lead</h2>
            </div>
            <div className="experienceDescriptionDetails">
              <ul>
                <li>
                  Led architecture decisions and development efforts of a
                  centralized hub containing various resources related to
                  services provided by the New Jersey Parents Caucus, including
                  class registration, mental health evaluation, family intake,
                  and referral database management/viewing
                </li>
                <li>
                  Contributed to the Online Parents' Empowerment Academy
                  website, used by parents to sign up for classes, complete
                  surveys, and receive training resources (React, Node.js,
                  Firebase)
                </li>
                <li>
                  Mentored another front-end developer on the team, answering
                  any questions and providing guidance on best practices and
                  architecture decisions made for the project
                </li>
              </ul>
            </div>
          </>
        )}
        {index === 3 && (
          <>
            <div className="experienceDescriptionHeader">
              <h1>ezCater</h1>
              <h2>Associate Software Engineer</h2>
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

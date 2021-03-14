import React, { FC } from "react";

import cypress from "../../assets/skillsLogos/cypress.png";
import git from "../../assets/skillsLogos/git.png";
import graphql from "../../assets/skillsLogos/graphql.png";
import java from "../../assets/skillsLogos/java.png";
import javascript from "../../assets/skillsLogos/javascript.png";
import jenkins from "../../assets/skillsLogos/jenkins.png";
import jest from "../../assets/skillsLogos/jest.png";
import python from "../../assets/skillsLogos/python.png";
import r from "../../assets/skillsLogos/r.png";
import react from "../../assets/skillsLogos/react.jpg";
import rtl from "../../assets/skillsLogos/rtl.png";
import ruby from "../../assets/skillsLogos/ruby.png";
import travis from "../../assets/skillsLogos/travis.png";
import typescript from "../../assets/skillsLogos/typescript.png";
import rspec from "../../assets/skillsLogos/rspec.png";
import php from "../../assets/skillsLogos/php.png";
import docker from "../../assets/skillsLogos/docker.png";

import { Languages } from "./Languages";
import { Frameworks } from "./Frameworks";
import { Testing } from "./Testing";
import { Tools } from "./Tools";

import "../../styles/Skills/SkillsContainer.css";

export const SkillsContainer: FC<unknown> = () => {
  const languages: { language: string; title: string }[] = [
    { language: javascript, title: "JavaScript" },
    { language: typescript, title: "TypeScript" },
    { language: java, title: "Java" },
    { language: ruby, title: "Ruby" },
    { language: r, title: "R" },
    { language: python, title: "Python" },
    { language: php, title: "PHP" },
  ];
  const frameworks: { framework: string; title: string }[] = [
    { framework: react, title: "React" },
    { framework: graphql, title: "GraphQL" },
  ];
  const testing: { test: string; title: string }[] = [
    { test: rtl, title: "React Testing Library" },
    { test: jest, title: "Jest" },
    { test: cypress, title: "Cypress" },
    { test: rspec, title: "RSpec" },
  ];

  const tools: { tool: string; title: string }[] = [
    { tool: git, title: "Git" },
    { tool: jenkins, title: "Jenkins" },
    { tool: travis, title: "Travis" },
    { tool: docker, title: "Docker" },
  ];

  return (
    <>
      <div className="skillsContainerIntro">
        <h1>Skills and Technologies</h1>
        <p>
          This is an ever-growing list of tools and technologies that I have
          experience with. More information can be found on my{" "}
          <a
            href="https://linkedin.com/in/kathleen-law"
            target="__blank"
            style={{ textDecoration: "none" }}
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
      <Languages languageList={languages} />
      <Frameworks frameworkList={frameworks} />
      <Testing testingList={testing} />
      <Tools toolList={tools} />
    </>
  );
};

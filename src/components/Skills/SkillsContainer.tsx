import React, { FC, useEffect } from "react";

import cypress from "../../assets/cypress.png";
import git from "../../assets/git.png";
import graphql from "../../assets/graphql.png";
import java from "../../assets/java.png";
import javascript from "../../assets/javascript.png";
import jenkins from "../../assets/jenkins.png";
import jest from "../../assets/jest.png";
import python from "../../assets/python.png";
import r from "../../assets/r.png";
import react from "../../assets/react.jpg";
import rtl from "../../assets/rtl.png";
import ruby from "../../assets/ruby.png";
import travis from "../../assets/travis.png";
import typescript from "../../assets/typescript.png";
import rspec from "../../assets/rspec.png";

import { Languages } from "./Languages";
import { Frameworks } from "./Frameworks";
import { Testing } from "./Testing";
import { Tools } from "./Tools";

export interface SkillsContainerProps {
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}
export const SkillsContainer: FC<SkillsContainerProps> = ({ setIndex }) => {
  const languages: { language: string; title: string }[] = [
    { language: javascript, title: "JavaScript" },
    { language: typescript, title: "TypeScript" },
    { language: java, title: "Java" },
    { language: ruby, title: "Ruby" },
    { language: r, title: "R" },
    { language: python, title: "Python" },
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
  ];

  useEffect(() => {
    setIndex(0);
  }, [setIndex]);

  return (
    <>
      <Languages languageList={languages} />
      <Frameworks frameworkList={frameworks} />
      <Testing testingList={testing} />
      <Tools toolList={tools} />
    </>
  );
};

import React, { FC } from "react";
import { Link } from "react-router-dom";

export const LearningInterests: FC<unknown> = () => {
  return (
    <>
      <p>
        As a software engineer, I consider myself to be a lifelong avid learner.
        While I have accepted that it is not possible to be an expert in every
        facet of software, I am very determined to dip a toe (or a leg) into as
        many areas across the field as I can. A growing list of the tools and
        tech that I work more extensively with can be found on the{" "}
        <Link to="/skills">Skills and Technology</Link> section of this site.
      </p>
      <p>
        Some other subjects that I would love to learn more about include, but
        definitely are not limited to:
        <ul>
          <li>
            AWS (I am currently taking a course to attain a Cloud Practitioner
            certificate){" "}
          </li>
          <li>Kubernetes</li>
          <li>Data analysis and visualization</li>
          <li>Authentication strategies and best practices</li>
          <li>Full-stack architectural decisions and best practices</li>
        </ul>
      </p>
    </>
  );
};

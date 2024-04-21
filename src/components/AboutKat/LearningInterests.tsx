import React, { FC } from "react";
import { Link } from "react-router-dom";
import "../../styles/AboutKat/LearningInterests.css"

export const LearningInterests: FC<unknown> = () => {
  return (
    <>
      <p className="text-center">
        A growing list of the tools that I work more extensively with can be
        found on the <Link to="/skills">Skills and Technology</Link> section of
        this site.
      </p>
      <p className="text-center">
        Some other subjects that I would love to learn more about include, but
        definitely are not limited to:
        <ul className="w-50 text-left interests-list">
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

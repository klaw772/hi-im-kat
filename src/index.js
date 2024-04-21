import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./components/App";
import { AboutOverview } from "./components/AboutKat/AboutOverview";
import { ExperienceContainer } from "./components/Experience/ExperienceContainer";
import { SkillsContainer } from "./components/Skills/SkillsContainer";
import { ContactContainer } from "./components/Contact/ContactContainer";
import { Intro } from "./components/Intro/Intro";
import { LearningInterests } from "./components/AboutKat/LearningInterests";
import { Bertha } from "./components/AboutKat/Bertha";
import { BooksOfNote } from "./components/AboutKat/BooksOfNote";
import { ModelBuilding } from "./components/AboutKat/ModelBuilding";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about-me",
        element: <AboutOverview />,
        children: [
          {
            path: "learning-interests",
            element: (
              <div className="aboutMeDetailBlock" id="learning-interests">
                <h4 className="text-center">Learning Interests</h4>
                <LearningInterests />
              </div>
            ),
          },
          {
            path: "books-of-note",
            element: (
              <div className="aboutMeDetailBlock" id="books-of-note">
                <h4 className="text-center">Books of Note</h4>
                <BooksOfNote />
              </div>
            ),
          },
          {
            path: "bertha",
            element: (
              <div className="aboutMeDetailBlock" id="bertha">
                <h4 className="text-center">Bertha</h4>
                <Bertha />
              </div>
            ),
          },
          {
            path: "model-building",
            element: (
              <div className="aboutMeDetailBlock" id="model-building">
                <h4 className="text-center">Model-Building</h4>
                <ModelBuilding />
              </div>
            ),
          },
        ],
      },
      {
        path: "recent-experience",
        element: <ExperienceContainer />,
      },
      {
        path: "skills",
        element: <SkillsContainer />,
      },
      {
        path: "contact",
        element: <ContactContainer />,
      },
      {
        path: "",
        element: <Intro />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

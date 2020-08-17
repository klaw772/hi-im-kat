import React, { FC, useState } from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./NavBar";
import { WorkExperienceContainer } from "./WorkExperience/WorkExperienceContainer";
import { Intro } from "./Intro/Intro";
import { SkillsContainer } from "./Skills/SkillsContainer";

import "../styles/App.css";
import { AboutOverview } from "./AboutKat/AboutOverview";

const App: FC<unknown> = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (eventKey: number, event: object | null) => {
    setIndex(eventKey);
  };

  return (
    <div className="App">
      <section>
        <header className="App-header">
          <NavBar index={index} />
        </header>
      </section>
      <section>
        <Switch>
          <Route exact path="/">
            <Intro />
          </Route>
          <Route exact path="/project-index">
            <p>Project Index</p>
          </Route>
          <Route exact path="/about-kat">
            <AboutOverview setIndex={setIndex} />
          </Route>
          <Route exact path="/kat-work">
            <WorkExperienceContainer
              index={index}
              handleSelect={handleSelect}
            />
          </Route>
          <Route exact path="/skills">
            <SkillsContainer setIndex={setIndex} />
          </Route>
        </Switch>
      </section>
    </div>
  );
};

export default App;

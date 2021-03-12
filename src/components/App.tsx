import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./NavBar";
import { WorkExperienceContainer } from "./WorkExperience/WorkExperienceContainer";
import { Intro } from "./Intro/Intro";
import { SkillsContainer } from "./Skills/SkillsContainer";

import "../styles/App.css";
import { AboutOverview } from "./AboutKat/AboutOverview";

const App: FC<unknown> = () => {
  return (
    <div className="App">
      <section>
        <header className="App-header">
          <NavBar />
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
            <AboutOverview />
          </Route>
          <Route exact path="/kat-work">
            <WorkExperienceContainer />
          </Route>
          <Route exact path="/skills">
            <SkillsContainer />
          </Route>
        </Switch>
      </section>
    </div>
  );
};

export default App;

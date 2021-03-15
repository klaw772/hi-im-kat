import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "./NavBar";
import { ExperienceContainer } from "./Experience/ExperienceContainer";
import { Intro } from "./Intro/Intro";
import { SkillsContainer } from "./Skills/SkillsContainer";

import "../styles/App.css";
import { AboutOverview } from "./AboutKat/AboutOverview";
import { ContactContainer } from "./Contact/ContactContainer";

const App: FC<unknown> = () => {
  return (
    <main className="App">
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
          <Route exact path="/about-me">
            <AboutOverview />
          </Route>
          <Route exact path="/recent-experience">
            <ExperienceContainer />
          </Route>
          <Route exact path="/skills">
            <SkillsContainer />
          </Route>
          <Route exact path="/contact">
            <ContactContainer />
          </Route>
        </Switch>
      </section>
    </main>
  );
};

export default App;

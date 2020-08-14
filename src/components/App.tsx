import React, { FC, useState } from "react";
import "../styles/App.css";
import NavBar from "./NavBar";
import { Switch, Route } from "react-router-dom";
import { WorkExperienceContainer } from "./WorkExperience/WorkExperienceContainer";
import { Intro } from "./Intro/Intro";

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
            <p>About Kat</p>
          </Route>
          <Route exact path="/kat-work">
            <WorkExperienceContainer
              index={index}
              handleSelect={handleSelect}
            />
          </Route>
          <Route exact path="/skills">
            <p>Skills</p>
          </Route>
        </Switch>
      </section>
    </div>
  );
};

export default App;

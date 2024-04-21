import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

import "../styles/App.css";

const App: FC<unknown> = () => {
  return (
    <main className="App">
      <section>
        <header className="App-header">
          <NavBar />
        </header>
      </section>
      <section>
        <Outlet />
      </section>
    </main>
  );
};

export default App;

import React, { FC } from "react";
import legoPiano from "../../assets/legoPiano.jpg";

export const ModelBuilding: FC<unknown> = () => {
  return (
    <>
      <p>
        At the beginning of 2020, when the world began to shut down because of
        COVID-19, I started building model sets. My first model set was made out
        of Lego: the{" "}
        <a
          href="https://www.lego.com/en-us/product/hogwarts-castle-71043"
          target="__blank"
          style={{ textDecoration: "none" }}
        >
          Hogwarts Castle
        </a>
        . From there, I have found metal kits from{" "}
        <a
          href="https://www.metalearth.com/"
          target="__blank"
          style={{ textDecoration: "none" }}
        >
          Metal Earth
        </a>
        , and wooden kits from{" "}
        <a
          href="https://rokrpuzzles.com/"
          target="__blank"
          style={{ textDecoration: "none" }}
        >
          Rokr
        </a>
        . Both of these have been INCREDIBLY fun and rewarding.
      </p>
      <p>
        Here is my most recent built model: the Lego{" "}
        <a
          href="https://www.lego.com/en-us/product/grand-piano-21323"
          target="__blank"
          style={{ textDecoration: "none" }}
        >
          Grand Piano
        </a>
        .
      </p>
      <div>
        <img
          src={legoPiano}
          alt="Completed Lego Grand Piano set"
          className="d-block w-50 ml-auto mr-auto mb-3"
        />
      </div>
      <p>
        I am currently gathering all of the models I have built and taking
        pictures of them to post here. Stay tuned!
      </p>
    </>
  );
};

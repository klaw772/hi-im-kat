import React, { FC } from "react";
import bertha from "../../assets/bertha.jpeg";

export const Bertha: FC<unknown> = () => {
  return (
    <div className="text-center w-75 m-auto">
      <p>
        I have a cat. Her name is Bertha. She is incredibly friendly and very
        curious. She sniffs anything that is placed in front of her nose - I
        truly think that if she had opposable thumbs, she would make a very
        detail-oriented scientist.
      </p>
      <p>Here is a picture of Bertha posing for the camera:</p>
      <div>
        <img
          src={bertha}
          alt="Bertha the cat"
          className="d-block w-50 mx-auto mb-3"
        />
      </div>
    </div>
  );
};

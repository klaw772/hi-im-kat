import React, { FC } from "react";

export const BooksOfNote: FC<unknown> = () => {
  return (
    <>
      <p>
        I absolutely LOVE to read. Some of my favorite genres include:
        <ul>
          <li>
            Tech and big data - As the evolution of technology continues to
            progress, the amount of data that is shared online is exponentially
            rising. These books are great to keep up-to-date with all of these
            changes and make sure that any practices around unethical tech or
            data management do not go unnoticed.
          </li>
          <li>
            Psychology and mental health - I am a passionate advocate for mental
            health awareness and wellness. I use these books as an opportunity
            to further my knowledge about what others are going through.{" "}
          </li>
          <li>
            Thriller and horror - I love being able to immerse myself in a
            story, and these books have been the easiest to dive into.{" "}
          </li>
        </ul>
      </p>
      <p>
        One of my next projects is setting up a personal book log where I can
        have one centralized place to chat about the books that I've been
        reading. Stay tuned!
      </p>
    </>
  );
};

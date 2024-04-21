import React, { FC } from "react";
import "../../styles/AboutKat/BooksOfNote.css"

export const BooksOfNote: FC<unknown> = () => {
  return (
    <div>
      <p className="text-center">
        I absolutely LOVE to read. Some of my favorite genres include:
        <ul className="text-start book-list">
          <li>Tech and big data</li>
          <li>Psychology and mental health</li>
          <li>Thriller and horror</li>
          <li>Historical fiction</li>
        </ul>
      </p>
      <p className="text-center">
        Eventually I'd love to make a book tracker of some kind....
      </p>
    </div>
  );
};

import React from "react";
import { ContactIcons } from "./ContactIcons";
import "../../styles/Contact/ContactContainer.css";

export const ContactContainer = () => {
  return (
    <div className="contactContainer">
      <h1>Drop Me A Line!</h1>
      <p>
        Check out my various social media profiles below, and please don't
        hesitate to reach out! I'd love to chat about cool happenings in the
        world of software, good books, or anything else that excites you! Thanks
        again for stopping by.
      </p>
      <div className="iconsContainer">
        <ContactIcons />
      </div>
    </div>
  );
};

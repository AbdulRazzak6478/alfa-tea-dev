import React from "react";
import Introduction from "./Introduction";
import SocialHandles from "./SocialHandles";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about center">
        <Introduction />
        <SocialHandles />
      </div>
    </>
  );
};

export default About;

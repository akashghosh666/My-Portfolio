import React from "react";
import Social from "../../common/Social";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          <h2>
            {" "}
            HELLO THERE, <br /> I am a{" "}
            <span className="info-name">Front End Enthusiast</span> <br />I LOVE
            to Create...
          </h2>
        </div>
        <div className="about-photo"></div>
        <img
          src={require("../../../assets/coding.png")}
          className="picture"
          alt=""
        />
      </div>
      <Social />
    </div>
  );
};

export default About;

import React from "react";
import About from "./about/About";
import "./body.css";
import Contact from "./contact/Contact";
import { Project } from "./projects/Project";
import Skill from "./skills/Skill";
import Work from "./work/Work";

const Body = () => {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="skill">
        <Skill />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Body;

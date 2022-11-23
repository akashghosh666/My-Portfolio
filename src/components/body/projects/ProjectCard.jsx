import React from "react";
import "./projectCard.css";

export const ProjectCard = ({ items }) => {
  return (
    <div className="projectCard">
      <div className="project-info">
        <div className="project-title">{items.title}</div>
        <div className="project-links">
          <div className="project-link">
            <a href={items.demo}>
              <div className="link-button">
                <img
                  src="https://img.icons8.com/ios-glyphs/30/null/geography.png"
                  alt=""
                />
                Demo
              </div>
            </a>
          </div>

          <div className="project-link">
            <a href={items.github}>
              <div className="link-button">
                <img
                  src="https://img.icons8.com/windows/32/null/github.png"
                  alt=""
                />
                Github
              </div>
            </a>
          </div>
        </div>
        <p className="project-about">{items.about}</p>
        <div className="project-tags">
          {items.tags.map((tag) => {
            return <label className="tag">{tag}</label>;
          })}
        </div>
      </div>
      <div className="project-img">
        <img src={items.image} alt="" />
      </div>
    </div>
  );
};

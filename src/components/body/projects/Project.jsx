import React from "react";
import Separator from "../../common/separator/Separator";
import { ProjectData } from "../../data/projects";
import "./project.css";
import { ProjectCard } from "./ProjectCard";

export const Project = () => {
  const data = ProjectData;
  return (
    <div className="project">
      <Separator />
      <label>
        <h2>
          <b>My Projects</b>
        </h2>
      </label>
      <div>
        {data.map((items) => {
          return (
            <>
              <ProjectCard items={items} />
            </>
          );
        })}
      </div>
    </div>
  );
};

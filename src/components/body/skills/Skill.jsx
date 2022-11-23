import React from "react";
import Separator from "../../common/separator/Separator";
import { SkillData } from "../../data/skill";
import "./skill.css";
import SkillCard from "./SkillCard";

const Skill = () => {
  const data = SkillData;
  return (
    <div className="skills">
      <Separator />

      <label htmlFor="" className="section-title">
        My skills
      </label>
      <div className="skill-info">
        {data.map((item) => {
          return (
            <div className="skill-section">
              <label htmlFor="" className="skill-section-title">
                {item.type}
              </label>
              <div className="skill-list">
                {item.list.map((i) => {
                  return <SkillCard i={i} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;

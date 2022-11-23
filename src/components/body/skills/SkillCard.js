import React from "react";
import "./skillcard.css";

const SkillCard = ({ i }) => {
  return (
    <div className="skillcard">
      <div className="skillicon">{i.icon}</div>
      <div className="skillname">{i.name}</div>
    </div>
  );
};

export default SkillCard;

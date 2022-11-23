import React from "react";
import { Icon } from "../data/Icon";
import "./social.css";

const Social = () => {
  const data = Icon;
  return (
    <div className="social">
      {data.map((item) => {
        return (
          <a href={item.link}>
            <div className="social-icon-div">
              <img src={item.icon} alt="" className="icon-image" />
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Social;

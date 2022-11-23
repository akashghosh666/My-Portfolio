import React from "react";
import "./web.css";

const Web = () => {
  return (
    <div class="web">
      <div className="web-option">
        <a href="#project"></a>
      </div>
      <div className="web-option">
        <a href="#project">
          <img
            src="https://img.icons8.com/fluency/48/null/group-of-projects.png"
            alt=""
            class="icon"
          />
          project
        </a>
      </div>
      <div className="web-option">
        <a href="#skill">
          <img
            src="https://img.icons8.com/doodle/48/null/learning.png"
            alt=""
            class="icon"
          />
          Skill
        </a>
      </div>
      <div className="web-option">
        <a href="#work">
          <img
            src="https://img.icons8.com/doodle/48/null/business.png"
            alt=""
            class="icon"
          />
          Work
        </a>
      </div>
      <div className="web-option">
        <a href="#user">
          <img
            src="https://img.icons8.com/stickers/100/null/gender-neutral-user-skin-type-3.png"
            alt=""
            class="icon"
          />
          Contact
        </a>
      </div>
    </div>
  );
};

export default Web;

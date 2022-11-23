import React from "react";
import "./Mobile.css";

const Mobile = ({ isOpen, setIsOpen }) => {
  return (
    <div className="mobile">
      <div
        className="close-icon"
        onClick={() => {
          setIsOpen(isOpen);
        }}
      >
        <img
          src="https://img.icons8.com/ios/50/null/close-window--v1.png"
          alt=""
        />
      </div>

      <div className="mobile-opions">
        <div class="mobile">
          <div className="mobile-option">
            <a href="#project"></a>
          </div>
          <div className="mobile-option">
            <a href="#project">
              <img
                src="https://img.icons8.com/fluency/48/null/group-of-projects.png"
                alt=""
                class="icon"
              />
            </a>
          </div>
          <div className="mobile-option">
            <a href="#skill">
              <img
                src="https://img.icons8.com/doodle/48/null/learning.png"
                alt=""
                class="icon"
              />
            </a>
          </div>
          <div className="mobile-option">
            <a href="#work">
              <img
                src="https://img.icons8.com/doodle/48/null/business.png"
                alt=""
                class="icon"
              />
            </a>
          </div>
          <div className="mobile-option">
            <a href="#user">
              <img
                src="https://img.icons8.com/stickers/100/null/gender-neutral-user-skin-type-3.png"
                alt=""
                class="icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;

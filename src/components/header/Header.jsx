import React, { useState } from "react";
import "./header.css";
import Mobile from "./mobile/Mobile";
import Web from "./web/Web";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div class="header">
      <div class="logo">Akash Ghosh</div>
      <div class="menu">
        <div class="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <img
              class="menu-icon"
              src="data:image/png;base64,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"
              alt=""
            ></img>
            <div>
              {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import Separator from "../../common/separator/Separator";
import Social from "../../common/Social";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <Separator />

      <div className="section-title">
        <label className="title">Contact</label>
        <div className="contact-container">
          <div className="contact-left">
            <p>if you want to contact me please reach out me from here</p>
            <Social />
          </div>
          <div className="download">
            <a download href={require("../../../assets/resume.pdf")}>
              <img
                src="https://img.icons8.com/windows/32/null/download-from-cloud.png"
                className="icon"
                alt=""
              />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

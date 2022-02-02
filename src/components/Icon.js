import React from "react";
import { default as github } from "../assets/img/svg/github-svg.svg";
import { default as instagram } from "../assets/img/svg/instagram-svg.svg";

const iconMap = {
  github: github,
  instagram: instagram,
};

const IconComponent = ({ iconName }) => {
  return (
    <div>
      <div className="icon-container">
        <div
          className="icon-item"
          style={{
            backgroundColor: "#fff",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a href="https://www.google.com" className="icon-link">
            <img src={iconMap[iconName]} alt="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default IconComponent;

import React from "react";
import { ReactComponent as github } from "../assets/img/svg/github-svg.svg";

const IconComponent = ({ iconName }) => {
  return (
    <div>
      <div className="icon-container">
        <div className="icon-item">
          <a href="" className="icon-link">
            {/* {iconMap[iconName]} */}
            {github}
          </a>
        </div>
      </div>
    </div>
  );
};

export default IconComponent;

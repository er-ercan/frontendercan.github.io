import React, { useState } from "react";
import "./mainpage.css";
import profile from "../../../assets/img/profile.png";
import { motion } from "framer-motion";
import IconComponent from "../../../components/Icon";

const bioMessages = {
  shortest: (
    <motion.div
      id="shortest"
      key="shortest"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      I'm a front-end developer
    </motion.div>
  ),
  short: (
    <motion.div
      id="short"
      key="short"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      I'm a front-end developer. I was born in Samsun, Turkey. I'm 32 years old.
      I working 8 years in web and Mobile development.
    </motion.div>
  ),
  medium: (
    <motion.div
      id="medium"
      key="medium"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      "I'm a full-stack developer, I love to create web applications and mobile
      applications. I'm a self-taught developer and I'm always looking for new
      challenges.",
    </motion.div>
  ),
  long: (
    <motion.div
      key="long"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      "I'm a full-stack developer, I love to create web applications and mobile
      applications. I'm a self-taught developer and I'm always looking for new
      challenges.",
    </motion.div>
  ),
  longest: (
    <motion.div
      key="longest"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      "I'm a full-stack developer, I love to create web applications and mobile
      applications. I'm a self-taught developer and I'm always looking for new
      challenges.",
    </motion.div>
  ),
};

const Mainpage = () => {
  const [slider, setSlider] = useState(() => "medium");

  const onChangeSliderHandler = ({ target }) => {
    setSlider(target.value);
  };

  return (
    <div className="section-profile">
      <motion.div
        style={{
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          boxShadow: "rgb(9 166 79 / 40%) 0px 0px 13px 5px",
          marginLeft: "5%",
        }}
        whileTap={{ scale: 0.8, rotate: 1800, borderRadius: "100%" }}
      >
        <img src={profile} alt="profile" className="profile-img" />
      </motion.div>
      <div className="bio-main-container">
        <h1 className="defination-person">
          Hello{" "}
          <motion.div
            whileHover={{
              scale: 1,
              rotate: 30,
              cursor: "pointer",
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            👋
          </motion.div>{" "}
          I'am Ercan Er.
        </h1>
        <p style={{ color: "#fff", opacity: "0.5" }}>Adjust bio length:</p>
        <div className="slider-button-list">
          <p style={{ color: "#fff", opacity: "0.5" }}>shortest</p>
          <div className="radio-container">
            <input
              type="radio"
              className="slider-button"
              name="bio"
              id="shortest"
              value="shortest"
              checked={slider === "shortest"}
              onChange={(event) => onChangeSliderHandler(event)}
            />
            <label htmlFor="shortest" className="slider-label">
              <span className="slider-label-text" />
            </label>
          </div>
          <div className="radio-container">
            <input
              type="radio"
              className="slider-button"
              name="bio"
              id="short"
              value="short"
              checked={slider === "short"}
              onChange={(event) => onChangeSliderHandler(event)}
            />
            <label htmlFor="short" className="slider-label">
              <span className="slider-label-text" />
            </label>
          </div>
          <div className="radio-container">
            <input
              type="radio"
              className="slider-button"
              name="bio"
              id="medium"
              value="medium"
              checked={slider === "medium"}
              onChange={(event) => onChangeSliderHandler(event)}
            />
            <label htmlFor="medium" className="slider-label">
              <span className="slider-label-text" />
            </label>
          </div>
          <div className="radio-container">
            <input
              type="radio"
              className="slider-button"
              name="bio"
              id="long"
              value="long"
              checked={slider === "long"}
              onChange={(event) => onChangeSliderHandler(event)}
            />
            <label htmlFor="long" className="slider-label">
              <span className="slider-label-text" />
            </label>
          </div>
          <div className="radio-container">
            <input
              type="radio"
              className="slider-button"
              name="bio"
              id="longest"
              value="longest"
              checked={slider === "longest"}
              onChange={(event) => onChangeSliderHandler(event)}
            />
            <label htmlFor="longest" className="slider-label">
              <span className="slider-label-text" />
            </label>
          </div>
          <p style={{ color: "#fff", opacity: "0.5" }}>longest</p>
        </div>
        <IconComponent />

        <div className="bioMessages">{bioMessages[slider]}</div>
      </div>
    </div>
  );
};

export default Mainpage;

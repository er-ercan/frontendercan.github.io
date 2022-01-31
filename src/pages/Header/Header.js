import React, { useState } from "react";
import "././header.css";
import { motion, useMotionValue, useTransform } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-200%", visibility: "hidden" },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [-100, 0, 100],
    ["#ff008c", "#171321", "rgb(230, 255, 0)"]
  );

  const menuHandler = (x) => {
    if (x?.current < -10) {
      setIsOpen(false);
    } else if (x?.current > 10) {
      setIsOpen(true);
    } else {
      return null;
    }
  };
  return (
    <header>
      <div>
        <motion.div style={{ background }} className="header-container">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            style={{ x }}
            onDrag={() => menuHandler(x)}
          >
            <div className="header-title">Ercan Er </div>
          </motion.div>

          <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}>
            <nav className="main-nav">
              <a href="/html/">HTML</a>
              <a href="/css/">CSS</a>
              <a href="/js/">JavaScript</a>
              <a href="/python/">Python</a>
            </nav>
          </motion.nav>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;

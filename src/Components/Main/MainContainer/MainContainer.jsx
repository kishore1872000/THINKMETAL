import React from "react";
import "./MainContainer.css";
import { motion } from "framer-motion";

const MainContainer = () => {
  const headTextAnimation = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: {
      type: "spring",
      damping: 5,
      stiffness: 40,
      restDelta: 0.001,
      duration: 0.3,
    },
  };
  return (
    <div className="main-container">
      <h1 className="main-heading">
        Create, inspect, and apply synthetic surveillance broadly.
      </h1>
      <p className="subtext">
        Start with a stunning homepage. Stay motivated without hurting your pocket.
      </p>
      <div className="buttons">
        <motion.button whileTap={{ scale: 0.9, rotate: 3 }}
          className="start-btns">
          Start for free
        </motion.button>
        <motion.div {...headTextAnimation} className="wanted">
          <p>Want to talk or get a live demo?</p>
          <a href="/contact" className="demo-link">
            Get in touch →
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default MainContainer;

import React from 'react';
import { motion } from 'framer-motion'; // Importing Framer Motion
import Frame1 from "../../../assets/Frame.png";
import Frame2 from "../../../assets/Frame1.png";
import Frame3 from "../../../assets/Frame2.png";
import Frame4 from "../../../assets/Frame3.png";
import Frame5 from "../../../assets/Frame4.png";
import Frame6 from "../../../assets/Frame5.png";
import Frame7 from "../../../assets/Frame6.png";
import "./ImageContainer.css";

function ImageContainer() {
  return (
    <div className="ImageContainer">
      <motion.div
        className="FrameHolder"
        initial={{ opacity: 0, x: -50 }} // Initial animation state
        animate={{ opacity: 1, x: 0 }}  // Final animation state
        transition={{ duration: 1 }}    // Animation duration
      >
        <img src={Frame1} alt="Frame Logo" className="Frame" />
      </motion.div>

      <motion.div
        className="framecontainer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <img src={Frame2} alt="Frame1" className="Frame1" />
      </motion.div>

      <motion.div
        className="framecontainer1"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      >
        <img src={Frame3} alt="Frame1" className="Frame2" />
      </motion.div>
      <motion.div
        className="framecontainer2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <img src={Frame4} alt="Frame1" className="Frame3" />
      </motion.div>
      <motion.div
        className="framecontainer3"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <img src={Frame5} alt="Frame1" className="Frame4" />
      </motion.div>
      <motion.div
        className="framecontainer4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <img src={Frame6} alt="Frame1" className="Frame5" />
      </motion.div>
      <motion.div
        className="framecontainer5"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <img src={Frame7} alt="Frame1" className="Frame6" />
      </motion.div>
    </div>
  );
}

export default ImageContainer;

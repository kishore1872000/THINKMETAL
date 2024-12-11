import React from "react";
import "./ShareContainer.css";
import { FaPlay } from "react-icons/fa";
import { SiNike } from "react-icons/si";
import { motion } from "framer-motion";
import frame10 from "../../assets/Frame10.png";

const ShareContainer = () => {
  return (
    <div className="container">
      {/* Left Section */}
      <div className="left-section">
        <motion.button
          whileTap={{ scale: 0.9, rotate: 3 }}
          className="share-button"
        >
          Share
        </motion.button>
        <h1 className="heading">Share anything you’re working on.</h1>
        <p className="description">
          Campsite has been instrumental in keeping designers aware of each
          other's work-in-progress in a way that was previously slowing us
          down. It's also one of the only channels where.
        </p>
        
        {/* Features Section */}
        <div className="features">
          <div className="feature-item">
            <SiNike className="nike-icon" />
            <span className="feature-text">Coded</span>
            <SiNike className="nike-icon" />
            <span className="feature-text">100% Secure</span>
          </div>
        </div>
        
        {/* Play Button */}
        <div className="play-btn-container">
          <div className="play-btn">
            <FaPlay className="play-icon" />
          </div>
          <span className="see-work">See how it works</span>
        </div>
      </div>

      {/* Right Section */}
      <motion.div layoutId="modal" className="right-section">
        <img src={frame10} alt="Illustration" className="illustration-img" />
      </motion.div>
    </div>
  );
};

export default ShareContainer;

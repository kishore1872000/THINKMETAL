import React from "react";
import "./Archive.css";
import frame from "../../assets/Vector1.svg";
import frame1 from "../../assets/Vector3.png";
import { motion } from "framer-motion";
const ArchiveOfProgress = () => {
  return (
    <div className="archive-container">
      <h1>Your Archive of Progress</h1>
      <div className="archive-sections">
        <div className="archive-card">
          <h2>Projects</h2>
          <p>Organize, follow, and archive.</p>
          <div className="card-graph">
            <div className="graph-header">
              <span>Overview</span>
              <motion.button whileTap={{ scale: 0.9, rotate: 3 }} className="monthly-button">Monthly</motion.button>
            </div>
            <div className="graph-price">
                <p>10k</p>
                <p>5k</p>
                <p>3k</p>
            </div>
            <div className="graph-chart">
              <span className="graph-data-point">$5,560 Ratings</span>
              <img src={frame} alt=""  className="Vector1"/>
            </div>
          </div>
        </div>
        <div className="archive-card">
          <h2>Member Profiles</h2>
          <p>Automatic portfolios of your work.</p>
          <div className="card-graph">
            <div className="graph-header">
              <motion.button whileTap={{ scale: 0.9, rotate: 3 }} className="monthly-button">New Leads</motion.button>
              <span className="leads-number">3,729</span>
              <span className="leads-percentage">70.0%</span>
            </div>
            <div className="graph-chart">
            <img src={frame1} alt=""  className="Vector2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchiveOfProgress;

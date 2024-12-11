import React, { useState } from 'react';
import './feedbackContain.css';
import image1 from "../../assets/Image1.png";
import image2 from "../../assets/Image2.png";
import image3 from "../../assets/Image3.png";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

const Feedback = () => {
  const [feedbackActive, setFeedbackActive] = useState(true);

  const toggleFeedback = () => {
    setFeedbackActive(!feedbackActive);
  };

  const feedbackData = [
    { name: 'Buzz Usborne', status: 'Pending', img: image1 },
    { name: 'Gabriel Valdivia', status: 'Done', img: image2 },
    { name: 'Jochem Dierx', status: 'Requested', img: image3 },
  ];

  return (
    <div className="feedback-container">
      {/* Feedback Card Section */}
      <div className='right-sections'>
      <div className="feedback-card">
        <div className="feedback-header">
          <h3>Looking for feedback?</h3>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={feedbackActive}
              onChange={toggleFeedback}
            />
            <span className="slider"></span>
          </label>
        </div>
        <ul className="feedback-list">
          {feedbackData.map((item, index) => (
            <li key={index} className="feedback-item">
              <img src={item.img} alt={`${item.name}'s avatar`} className="avatar" />
              <div className="details">
                <span className="name">{item.name}</span>
                <span className="status">{item.status}</span>
              </div>
            </li>
          ))}
        </ul>
        <button className="add-more">+ Add More</button>
      </div>
      </div>
      <div className="lefter">
      <div className="left-section">
        <motion.button
          whileTap={{ scale: 0.9, rotate: 3 }}
          className="share-button"
        >
          Feedback
        </motion.button>
        <h2 className='headings'>Better feedback at the right time.</h2>
        <p className='descriptions'>
          Campsite has been instrumental in keeping designers aware of each
          other's work-in-progress in a way that was previously slowing us down.
          It's also one of the only channels where.
        </p>
        <div className="play-btn-containers">
          <div className="play-btns">
            <FaPlay className="play-icons" />
          </div>
          <span className="see-works">See how it works</span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Feedback;

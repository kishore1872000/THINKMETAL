import React from "react";
import "./Feedback2.css";
import image1 from "../../assets/Image1.png";
import image2 from "../../assets/Image2.png";
import image3 from "../../assets/Image3.png";
import logo from "../../assets/Auto Layout Horizontal1.png"
import { motion } from "framer-motion";
const Feedback = () => {
    return (
        <div className="feedback-containers">
            <header className="feedback-headers">
                <p className="feedback-timings">Best time here</p>
                <h1>Better feedback at the right time.</h1>
            </header>

            <div className="feedback-cards">
                <div className="card-headers">
                    <img src={logo} alt="" className="logoimage" />
                    <div className="brand-infos">
                        <div className="brand-logos">Cloudhub</div>
                        <p>2m ago in Brand</p>
                    </div>
                    <motion.button
                        whileTap={{ scale: 0.9, rotate: 3 }}
                        className="view-post-btns">View post</motion.button>
                </div>

                <div className="imagefolder">
                    <img src={image1} alt="Profile avatar" className="profile-avatarspart" />
                    <img src={image2} alt="Profile avatar" className="profile-avatarspart1" />
                    <img src={image3} alt="Profile avatar" className="profile-avatarspart2" />
                    <p className="feedback-detailss"> 3 people are looking for feedback this week
                    </p>
                </div>

            </div>

            <div className="feedback-actionss">
                <div className="action-items">
                    <span>@</span>
                    <strong>Mentions</strong>
                    <p>Mention anyone on your team to include them in a post.</p>
                </div>
                <div className="action-items">
                    <span>≡</span>
                    <strong>Polls</strong>
                    <p>Get a quick gut check from the team on design options.</p>
                </div>
                <div className="action-items">
                    <span>✔</span>
                    <strong className="Resolve">Resolve comments</strong>
                    <p>Mark comments as resolved to keep the conversation focused.</p>
                </div>
            </div>
        </div>
    );
};

export default Feedback;

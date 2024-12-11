import React from 'react'
import "./Moblie.css"
import { motion } from "framer-motion";
import photo from "../../assets/Desginer/Frame.png"
function Moblie() {
    return (
        <div>
            <div className="app">
                <header className="header">
                    <h1>Keep everyone in the loop</h1>
                    <p>All good things start with a homepage. Get inspired without breaking your wallet.</p>
                    <motion.button whileTap={{ scale: 0.9, rotate: 3 }} className="cta-button">Start for free</motion.button>
                </header>
                <div className="hoder">
                    <img src={photo} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Moblie
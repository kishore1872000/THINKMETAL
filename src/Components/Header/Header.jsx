import React, { useState } from 'react';
import Logo from "../../assets/Logo.svg";
import "./Header.css";
import { RiMenu2Line } from "react-icons/ri";
import { motion } from "framer-motion"; // Import Framer Motion

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Cloudhub Logo" className="logo" />
      </div>
      
      {/* Animated Menu */}
      <motion.ul
        className={`navbar-links ${isMenuOpen ? "active" : ""}`}
        initial={{ x: "-40%" }} // Start off-screen
        animate={{ x: isMenuOpen ? 0 : "0%" }} // Animate to left-to-right
        transition={{ duration: 0.3 }} // Set the animation duration
      >
        <li>
          <a href="#product">Product</a>
        </li>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#shop">Shop</a>
        </li>
        <li>
          <a href="#pages">Pages</a>
        </li>
        <li>
          <a href="#integrations">Integrations</a>
        </li>
        <li>
          <a href="#developers">Developers</a>
        </li>
        
        <div className="navbar-actions">
          <a href="#login" className="login-link">Login</a>
          <motion.button whileTap={{ scale: 0.9, rotate: 3 }}className="btn-start">Start for FREE</motion.button>
        </div>
      </motion.ul>

      {/* Menu Icon */}
      <RiMenu2Line className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
}

export default Header;
    

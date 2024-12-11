import React from "react";
import "./Footer.css";
import logo from "../../assets/Desginer/logo.png"
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Icon Section */}
        <div className="footer-icon">
          <img src={logo} alt="Logo" />
        </div>

        {/* Product Section */}
        <div className="footer-column">
          <h4>Product</h4>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#changelog">Changelog</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="footer-column gamers">
          <h4>Legal</h4>
          <ul>
            <li><a href="#terms">Terms of Privacy</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#security">Security</a></li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="footer-column gamers">
          <h4>Company</h4>
          <ul>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="footer-column">
          <h4>Social</h4>
          <ul>
            <li><a href="#dribbble">Dribbble</a></li>
            <li><a href="#behance">Behance</a></li>
            <li><a href="#discord">Discord</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>All rights reserved. © 2024 ThinkMetal</p>
      </div>
    </footer>
  );
};

export default Footer;
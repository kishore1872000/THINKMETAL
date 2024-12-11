import React from 'react';
import image1 from "../../assets/Desginer/Logo1.png";
import image2 from "../../assets/Desginer/Logo2.png";
import image3 from "../../assets/Desginer/Logo3.png";
import image4 from "../../assets/Desginer/Logo4.png";
import image5 from "../../assets/Desginer/Logo5.png";
import image6 from "../../assets/Desginer/Logo6.png";
import image7 from "../../assets/Desginer/Logo7.png";
import image8 from "../../assets/Desginer/Logo8.png";
import "./Desginfolder.css";

function Desginfolder() {
  return (
    <div className="design-folder-container">
      <h2 className="section-title">Loved By Designers At</h2>
      <div className="logos-grid">
        <img src={image1} alt="Logo 1" className="logo-item" />
        <img src={image2} alt="Logo 2" className="logo-item" />
        <img src={image3} alt="Logo 3" className="logo-item" />
        <img src={image4} alt="Logo 4" className="logo-item" />
        <img src={image5} alt="Logo 5" className="logo-item" />
        <img src={image6} alt="Logo 6" className="logo-item" />
        <img src={image7} alt="Logo 7" className="logo-item" />
        <img src={image8} alt="Logo 8" className="logo-item" />
      </div>
    </div>
  );
}

export default Desginfolder;

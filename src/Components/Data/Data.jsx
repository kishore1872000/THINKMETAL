import React from "react";
import frame1 from "../../assets/Frame11.png";
import frame2 from "../../assets/Frame12.png";
import frame3 from "../../assets/Frame13.png";
import frame4 from "../../assets/Frame14.png";
import frame5 from "../../assets/Frame15.png";
import frame6 from "../../assets/Frame16.png";
import frame7 from "../../assets/Frame17.png";
import "./Data.css"; // Import the CSS file

function Data() {
  const images = [frame1, frame2, frame3, frame4, frame5, frame6, frame7];

  return (
    <div className="image-scroll-container">
      <div className="image-scroll">
        {images.map((image, index) => (
          <img src={image} alt={`Frame ${index + 1}`} key={index} />
        ))}
        {/* Duplicate images for smooth scrolling */}
        {images.map((image, index) => (
          <img src={image} alt={`Frame ${index + 1} duplicate`} key={`dup-${index}`} />
        ))}
      </div>
    </div>
  );
}

export default Data;

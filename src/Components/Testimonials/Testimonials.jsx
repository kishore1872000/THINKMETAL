import React from "react";
import "./Testimonials.css";
import Acme from "../../assets/AcmeGroup.png"
import Layers1 from "../../assets/Layers1.png"
import Layers10 from "../../assets/image11.png"
import Layers12 from "../../assets/image12.png"
const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="testimonial-card stayer">
        <div className="icon">
          <img src={Layers1} alt="Cloudhub Icon" />
        </div>
        <p className="testimonial-text">
          Cloudhub has emerged as an essential asset for the team at Patreon
          design. Amidst an accelerated expanding organization in which the
          product undergoes rapid changes, Campsite enables us to maintain
          visibility on what’s transpiring across various teams — impeccably
          aligning with our pre-existing procedures.
        </p>
        <div className="author-info">
          <img
            src={Layers10}
            alt="Gabriel Valdivia"
            className="author-image"
          />
          <div>
            <p className="author-name">Gabriel Valdivia</p>
            <p className="author-title">Principal Product Designer, Patreon</p>
          </div>
        </div>
      </div>

      <div className="testimonial-card">
        <div className="icon">
          <img src={Acme} alt="Cloudhub Icon" />
        </div>
        <p className="testimonial-text">
          Cloudhub has demonstrated exceptional worth in preserving open
          communication among designers regarding their current endeavors, a
          challenge that previously impeded our progress. It continually stands
          as a distinctive platform guiding our dialogue towards imagination and
          consistent review, an element I highly value. Moreover, it has
          accelerated our propensity for early-stage feedback beyond my
          expectations.
        </p>
        <div className="author-info">
          <img
            src={Layers12}
            alt="Buzz Usborne"
            className="author-image"
          />
          <div>
            <p className="author-name">Buzz Usborne</p>
            <p className="author-title">Principal Designer, Buildkite</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;


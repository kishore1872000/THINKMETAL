import React from "react";
import "./TeamVisibility.css";
import logo from "../../assets/Desginer/logo.png"
const TeamVisibility = () => {
  return (
    <div className="containerer">
      <div className="iconer">
        <div className="logoer">
          <img src={logo} alt="" className="logo19er"></img>
        </div>
      </div>
      <h1 className="titleer">Increase your team’s visibility and alignment</h1>
      <p className="subtexter">Start for free, flexible for all teams.</p>
      <div className="buttonser">
        <button className="btn demoer">Request a Demo</button>
        <button className="btn free-actioner">Start for free</button>
      </div>
    </div>
  );
};

export default TeamVisibility;
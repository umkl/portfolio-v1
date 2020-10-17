import React from "react";
import "./btn1.scss";
import UgWeatherIcon from "./../../assets/Ungar-weather.svg";

const UgBtn1 = (props) => {
  const btn1Style = {};
  const btn1Style1 = {};

  const btn1Style2 = {};

  return (
    <div style={btn1Style} className="ug-btn1">
      <div style={btn1Style1} className="ug-btn1-1">
        <p className="ug-btn1-1-name">{props.name1}</p>
      </div>
      <div style={btn1Style2} className="ug-btn1-2">
        <p className="ug-btn1-2-name">{props.name2}</p>
      </div>
      <div className="ug-btn1-normal">
        <img className="ug-btn1-normal-icon" src={UgWeatherIcon} alt="ug weather icon" />
      </div>
      
    </div>
  );
};

export default UgBtn1;

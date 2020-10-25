import React from "react";
import "./btn.scss";
import { useLocation } from "react-router-dom";
import UgWeatherIcon from "./../../assets/Ungar-weather.svg";

const UgBtn = () => {
  const location = useLocation();
  // console.log(location.pathname);

  if (location.pathname == "/") {
    return (
      <div>
        <div className="ug-btn">
          {/* <div>lakösjflkö</div> */}
          <div className="ug-btn-twin">
            <div className="ug-btn-twin-login-darkmode">login</div>
            <div className="ug-btn-twin-register-darkmode">register</div>
          </div>
          <div className="ug-btn-darkmode">
            <img
              className="ug-btn1-normal-icon"
              src={UgWeatherIcon}
              alt="ug weather icon"
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default UgBtn;

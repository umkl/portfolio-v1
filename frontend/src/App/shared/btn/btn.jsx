import React from "react";
import "./btn.scss";
import { useLocation } from "react-router-dom";
import UgWeatherIcon from "./../../assets/Ungar-weather.svg";
import { Link } from "react-router-dom";

const UgBtn = () => {
  const location = useLocation();
  // console.log(location.pathname);
  // console.log(location.pathname=="/p")
  if (location.pathname == "/") {
    return (
      <div>
        <div className="ug-btn">
          {/* <div>lakösjflkö</div> */}
          <div className="ug-btn-twin">
            <Link className="ug-nav-link" to="/login">
              <div className="ug-btn-twin-login-darkmode">login</div>
            </Link>

            <Link className="ug-nav-link" to="/registration">
              <div className="ug-btn-twin-register-darkmode">register</div>
            </Link>
          </div>
        </div>
      </div>
    );
  } else if (location.pathname == "/projects") {
    return (
      <div>
        <div className="ug-btn">
          <div className="ug-btn-twin">
            <div className="ug-btn-twin-login-darkmode">login</div>
            <div className="ug-btn-twin-register-darkmode">register</div>
          </div>
          {/* <div className="ug-btn-darkmode">
            <img
              className="ug-btn1-normal-icon"
              src={UgWeatherIcon}
              alt="ug weather icon"
            />
          </div> */}
        </div>
      </div>
    );
  } else if (location.pathname == "/content") {
    return <div>content</div>;
  } else if (location.pathname == "/contact") {
    return <div>contact</div>;
  } else if (location.pathname == "/login") {
    return (
      <div className="ug-btn">
        <div className="ug-btn-twin">
          {/* <div className="ug-btn-twin-login-darkmode">
              <Link className="ug-nav-link" to="/login">
                login
              </Link>
            </div> */}
          <Link to="/registration">
            <div className="ug-btn-register-darkmode">register</div>
          </Link>
        </div>
      </div>
    );
  } else if (location.pathname == "/registration") {
    return (
      <div className="ug-btn">
        <div className="ug-btn-twin">
          {/* <div className="ug-btn-twin-login-darkmode">
              <Link className="ug-nav-link" to="/login">
                login
              </Link>
            </div> */}
          <Link to="/login">
            <div className="ug-btn-register-darkmode">login</div>
          </Link>
        </div>
      </div>
    );
  }else if(location.pathname=="/contact"){
    return (
      <div>
        <div className="ug-btn">
          {/* <div>lakösjflkö</div> */}
          <div className="ug-btn-twin">
            <Link className="ug-nav-link" to="/login">
              <div className="ug-btn-twin-login-darkmode">login</div>
            </Link>

            <Link className="ug-nav-link" to="/registration">
              <div className="ug-btn-twin-register-darkmode">register</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default UgBtn;

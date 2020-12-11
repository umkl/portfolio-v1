import React, {useState} from "react";
import "./btn.scss";
import { useLocation } from "react-router-dom";
import UgWeatherIcon from "./../../assets/Ungar-weather.svg";
import { Link } from "react-router-dom";
import {useSpring, animated as a } from "react-spring";

const UgBtn = () => {
  const [isActive, setActive] = useState(true);
  const searchSpring = useSpring({opacity: isActive ? 1: 0});

  const location = useLocation();
  if (location.pathname == "/") {
    return (
      <div className="ug-btn">
        <Link className="ug-nav-link" to="/login">
          <div className="ug-btn-twin-login-darkmode">login</div>
        </Link>
      </div>
    );
  } else if (location.pathname == "/projects") {
    return (
      <div className="ug-btn">
        <div className="ug-btns">
          <div className="ug-btn-twin-login-darkmode">login</div>
        </div>
      </div>
    );
  } else if (location.pathname == "/content") {
    return (
      <div className="ug-btn">

        <a.div style={searchSpring} onClick={()=>{setActive(!isActive)}} className="ug-btn-search">search</a.div>

        <Link className="ug-nav-link" to="/login">
          <div className="ug-btn-login">login</div>
        </Link>
      </div>
    );
  } else if (location.pathname == "/contact") {
    return (
      <div>
        <div className="ug-btn">
          {/* <div>lakösjflkö</div> */}
          <div className="ug-btns">
            <Link className="ug-nav-link" to="/login">
              <div className="ug-btn-twin-login-darkmode">login</div>
            </Link>
            {/* 
            <Link className="ug-nav-link" to="/registration">
              <div className="ug-btn-twin-register-darkmode">register</div>
            </Link> */}
          </div>
        </div>
      </div>
    );
  } else if (location.pathname == "/login") {
    return (
      <div className="ug-btn">
        <div className="ug-btns">
          {/* <div className="ug-btn-twin-login-darkmode">
              <Link className="ug-nav-link" to="/login">
                login
              </Link>
            </div> */}
          {/* <Link to="/registration">
            <div className="ug-btn-register-darkmode">register</div>
          </Link> */}
        </div>
      </div>
    );
  }

  // else if (location.pathname == "/registration") {
  //   return (
  //     <div className="ug-btn">
  //       <div className="ug-btn-twin">
  //         {/* <div className="ug-btn-twin-login-darkmode">
  //             <Link className="ug-nav-link" to="/login">
  //               login
  //             </Link>
  //           </div> */}
  //         <Link to="/login">
  //           <div className="ug-btn-register-darkmode">login</div>
  //         </Link>
  //       </div>
  //     </div>
  //   );
  // }
};

export default UgBtn;

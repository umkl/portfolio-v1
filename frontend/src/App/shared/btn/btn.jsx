import React, { useState, useRef, useEffect } from "react";
import { useSpring, animated as a } from "react-spring";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import "./btn.scss";

import SearchIcon from "./../../assets/Searchicon.png";
// import UgWeatherIcon from "./../../assets/Ungar-weather.svg";

const UgBtn = () => {
  const [isActive, setActive] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const searchRef = useRef();

  const searchSpring = useSpring(
    isActive
      ? {
          width: "200px",
        }
      : {
          width: "80px",
          // minWidth:"fitContent"
          // width: "65px",
        }
  );

  useEffect(() => {
    console.log(searchInput);
  }, [searchInput]);

  const location = useLocation();
  if (location.pathname == "/") {
    return (
      <div className="ug-btn">
        <Link className="ug-nav-link" to="/login">
          <div className="ug-btn-twin-login">login</div>
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
        <a.div style={searchSpring} className="ug-btn-search">
          <input
            ref={searchRef}
            onFocus={() => {
              setActive(true);
            }}
            onBlur={() => {
              setActive(false);
            }}
            className="ug-btn-search-input"
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="search"
          />
        </a.div>
        <div
          onClick={() => {
            searchRef.current.focus();
          }}
          className="ug-btn-search_icon"
        >
          <img src={SearchIcon} alt="" height="20px" width="20px" />
        </div>
        <Link className="ug-nav-link" to="/login">
          <div className="ug-btn-login">login</div>
        </Link>
      </div>
    );
  } else if (location.pathname == "/contact") {
    return (
      <div>
        <div className="ug-btn">
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

import React, { useState, useRef, useEffect, useContext } from "react";
import { useSpring, animated as a } from "react-spring";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { SearchContext } from "./../../context/SearchContext";
import "./btn.scss";
import SearchIcon from "./../../assets/Searchicon.png";

const UgBtn = () => {
  // const [isActive, setActive] = useState(false);
  // const [searchInput, setSearchInput] = useContext(SearchContext);
  // const searchRef = useRef();
  // const location = useLocation();
  
  if (location.pathname == "/") {
    return (
      <div className="ug-btn">
        <Link className="ug-nav-link" to="/login">
          <div className="ug-btn-login">login</div>
        </Link>
      </div>
    );
  } else if (location.pathname == "/projects") {
    return (
      <div className="ug-btn">
        

        <Link className="ug-nav-link" to="/login">
          <div className="ug-btn-login">login</div>
        </Link>
      </div>
    );
  } else if (location.pathname == "/content") {
    return (
      <div className="ug-btn">
        

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
              <div className="ug-btn-login">login</div>
            </Link>
          </div>
        </div>
      </div>
    );
  } else if (location.pathname == "/login") {
    return (
      <div className="ug-btn">
        <div className="ug-btns">
        </div>
      </div>
    );
  } else {
    return (
      <div className="ug-btn">
        <Link className="ug-nav-link" to="/login">
          <div className="ug-btn-login">login</div>
        </Link>
      </div>
    );
  }
};

export default UgBtn;

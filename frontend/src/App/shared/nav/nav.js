// import UngarIcon from "./../../assets/Ungar-Icon.png";
import React, { Component } from "react";
import "./nav.scss";
import { Link } from "react-router-dom";

export default class UgNav extends Component {
  render() {
    return (
      <nav id="ug-nav-bar">
        <div className="ug-nav-element">
          <Link className="ug-nav-link" to="/">
            <span className=" ug-nav-element-icon ug-nav-element-selected_true">U</span>
            {/* <img src={UngarIcon} alt="icon for ungar"></img> */}
          </Link>
        </div>

        <div className="ug-nav-element">
          <Link className="ug-nav-link" to="/content">
          <span className="ug-nav-element-sub">content</span>
            {/* <img src={UngarIcon} alt="logo" id="i"/> */}
          </Link>
        </div>

        <div className="ug-nav-element">
          <Link className="ug-nav-link"  to="/contact">
            <span className="ug-nav-element-sub">contact</span>
            {/* <img src={UngarIcon} alt="logo" id="i"/> */}
          </Link>
        </div>

        

        <div className="ug-nav-element">
          <Link className="ug-nav-link"  to="/about">
            <span className="ug-nav-element-sub">about</span>
          </Link>
        </div>
        
        <div className="ug-nav-element">
          <Link className="ug-nav-link"  to="/projects">
          <span className="ug-nav-element-sub">projects</span>
          </Link>
        </div>
      </nav>
    );
  }
}

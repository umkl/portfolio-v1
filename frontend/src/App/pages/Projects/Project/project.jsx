import React from "react";
import "./project.scss";
import { Link } from "react-router-dom";
import { animated as a } from "react-spring";

const UgProject = (props) => {
  
  if (props.Title != "Trailer") {
    return (
      <a.div style={props.style} className="ug-project">
        <div className="parts">
          <div className="image">
            <img className="image-class" src={props.Image} alt="image here" />
          </div>
          <div className="text">
            <div className="ug-project-title">{props.Title}</div>
            <div className="ug-project-description">{props.Slogan}</div>
            <div className="ug-project-description">{props.Description}</div>
            <div className="ug-project-description">{props.Link}</div>
          </div>
        </div>

      </a.div>
    );
  } else {
    return (
      <a.div style={props.style} className="ug-trailer">
        <div className="ug-project-title"> More Projects coming soon</div>
        <div className="ug-project-you">
          Maybe my next Project could be yours!
        </div>
        <div className="ug-project-contact">
          <div className="ug-project-contact-first">Contact me</div>
          <span className="ug-project-contact-border">
            <Link to="/contact" style={{ "color": "white", "textDecoration": "none" }}>here</Link>
          </span>
        </div>
      </a.div>
    );
  }
};

export default UgProject;

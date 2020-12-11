import React from "react";
import "./project.scss";
import { useSpring, animated as a } from "react-spring";

const UgProject = (props) => {
  return (
    <a.div style={props.style} className="ug-project">
      {props.Title} <br />
      {props.Description}
    </a.div>
  );
};

export default UgProject;

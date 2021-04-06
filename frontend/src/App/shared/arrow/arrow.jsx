import React from "react";
import "./arrow.scss";

const UgArrow = (props) => {
  if (props.location == "right") {
    return <div className="ug-arrow right">arrow</div>;
  }
};

export default UgArrow;

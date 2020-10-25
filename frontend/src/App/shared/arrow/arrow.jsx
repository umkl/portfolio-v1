import React from "react";
import "./arrow.scss";

const UgArrow = (props) => {
  // if(props.dir = "left"){
  //     return (
  //         <div>
  //             dsasfdsd
  //         </div>
  //     )
  // }

//   console.log(props.location)
  if (props.location == "right") {
    return <div className="ug-arrow right">arrow</div>;
  }
};

export default UgArrow;

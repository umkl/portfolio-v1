import React from "react";
import './about.scss'

const UgAboutCard = (props) => {
  return (
    <div>
      <div className="ug-foyer-about">
        <div className="ug-foyer-about-heading">
          <span>{props.heading}</span>
        </div>
        <div className="ug-foyer-about-divider"></div>
        <div className="ug-foyer-about-description">
          {/* <p>
            fkajslfölfajsdf
            <br />
            asdflakjs <br />
            adsflköas
          </p> */}
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default UgAboutCard;
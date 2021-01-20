import React, { useState } from "react";
import { animated as a, useSpring, config } from "react-spring";
import "./../contact.scss";

const UgLink = (props) => {
  const contactSpring = useSpring({
    to: { opacity: 1, marginLeft: "0px" },
    from: { opacity: 0, marginLeft: "-400px" },
    config: config.stable,
  });


  const [linkColor, setLinkColor] = useState("rgba(255, 255, 255, 0.5)");
  const [hoverStatus, setHoverStatus] = useState(false);

  return (
    <div href={props.link}>
      <a.div
        onMouseOver={() => setLinkColor("white")}
        style={contactSpring}
        className="ug-contact-container-line"
      >
        <img
          src={props.imageSource}
          alt={props.name}
          height="35px"
          width="35px"
        />
        <div
          className="ug-contact-links-divider"
          style={{
            backgroundColor: linkColor,
            transition: "background-color 2s",
          }}
        />
        <div className="ug-contact-links-div">
          <a.div
            style={contactSpring}
            className="ug-content-links-div-text"
            
          >
            <a
            onMouseOver={()=>{setLinkColor("rgba(255, 255, 255, 1)")}}
            onMouseLeave={()=>{setLinkColor("rgba(255, 255, 255, 0.5)")}}
            className="ug-content-linkds-div-link" href={props.linkHref} style={{color: linkColor,transition: "color 2s"}}>
              {hoverStatus?props.username:props.name}
            </a>
          </a.div>
        </div>
      </a.div>
    </div>
  );
};

export default UgLink;

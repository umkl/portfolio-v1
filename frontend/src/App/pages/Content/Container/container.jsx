import "./Container.scss";
import Aos from "aos";
import { useSpring, animated as a } from "react-spring";
import React, { useState, useRef, useCallback } from "react";
import useOnScreen from "../../../utils/useOnScreen.jsx";
import { useHistory } from "react-router-dom";

const Container = (props) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const [backgroundColor, setBackgroundColor] = useState("#000000");
  const [hoverStatus, setHoverStatus] = useState(true);
  const springProps = useSpring({
    opacity: isVisible ? 1 : 0,
    marginLeft: isVisible ? 0 : -500,
  });

  const history = useHistory();
  const onClick = useCallback(() => {
    const to = `/content/${props.heading}`;
    history.push(to);
  }, [props.heading, history]);

  const backgroundSpring = useSpring(
    {
      backgroundColor: !hoverStatus ? "#FFFFFF" : "#000000"
    }
  );

  return (
    <a.div
      ref={ref}
      style={springProps}
      className="ug-container"
      onClick={onClick}
      // onMouseOver={setHoverStatus(true)}
      // onMouseLeave={setHoverStatus(false)}
    >
      {/* <Link className="ug-container-link" to={`/content/${props.heading}`}> */}
      <div className="ug-container-heading">{props.heading}</div>
      <div className="ug-container-small_description">{props.description}</div>
      {/* </Link> */}
    </a.div>
  );
};

export default Container;

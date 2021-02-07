import React, { useEffect, useState, useContext } from "react";
import { useSpring, animated as a } from "react-spring";
import UgNav from "./../nav/nav.jsx";
import UgBtn from "./../btn/btn.jsx";
import "./bar.scss";
import { BlurContext } from "./../../context/BlurContext.js";
import { useLocation } from "react-router-dom";
import Logo from "./../../assets/UNGAR_NEW_LOGO.svg";

function UgBar() {
  const [loaded, setLoaded] = useState(false);
  const [pathParts, setPathParts] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [blur, setBlur] = useContext(BlurContext);
  var cLocation = useLocation();

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const barFade = useSpring({
    opacity: loaded ? 1 : 0,
    marginTop: loaded ? 0 : -500,
  });

  const evaluateAndSetPath = () => {
    setPathParts(() => {
      return cLocation.pathname.split("/").length - 1;
    });
  };

  useEffect(() => {
    setLoaded(true);
    evaluateAndSetPath();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    evaluateAndSetPath();
  }, [cLocation.pathname]);

  if (pathParts == 1) {
    return (
      <div style={blur != null ? { filter: `blur(${blur})` } : null}>
        {cLocation.pathname == "/login" ? (
          // <a.div id="ug-bar-login" style={barFade}>
          //   <UgNav />
          // </a.div>
          <div></div>
        ) : (
          <a.div id="ug-bar" style={barFade}>
            <UgBtn />
            <UgNav />
          </a.div>
        )}
      </div>
    );
  } else {
    // window.scrollTo(0, 0);
    return <div></div>;
  }
}

export default UgBar;

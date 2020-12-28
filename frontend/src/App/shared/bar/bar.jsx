import React, { useEffect, useState } from "react";
import { useSpring, animated as a } from "react-spring";
import UgNav from "./../nav/nav.jsx";
import UgBtn from "./../btn/btn.jsx";
import "./bar.scss";

function UgBar() {
  const [loaded, setLoaded] = useState(false);
  const [pathParts, setPathParts] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

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
      return location.pathname.split("/").length - 1;
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
  }, [location.pathname]);

  if (pathParts == 1) {
    
    return (
      <a.div id="ug-bar" style={barFade}>
        <UgBtn />
        <UgNav />
      </a.div>
    );
  } else {
    window.scrollTo(0, 0);
    return <div></div>;
  }
}

export default UgBar;

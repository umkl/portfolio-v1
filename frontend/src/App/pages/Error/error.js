import React, { useState, useEffect } from "react";
import "./error.scss";
import { animated as a, useSpring } from "react-spring";
import {Link} from "react-router-dom";

const Error = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const springProps = useSpring({
    marginTop: loaded ? "0px" : "400px",
    opacity: loaded ? 1 : 0
    // marginLeft: loaded ? "0px":"400px",
    // transform: `translate(-50%,-50%) scale(${loaded?"1":"0.8"})`
  });

  return (
    <div className="ug-error">
      <a.div style={springProps} className="box">
        <p className="line-1">This page was not found.</p>
        {/* <p className="line-2">
          return to <span>foyer</span>
        </p> */}
        <div className="line-2">return to 
        <span className="line-2-border_button">
          <Link
            to="/foyer"
            style={{ color: "white", textDecoration: "none" }}
          >
            foyer
          </Link>
        </span>
        </div>
      </a.div>
    </div>
  );
};

export default Error;

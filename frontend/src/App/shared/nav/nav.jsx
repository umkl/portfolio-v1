import React, { useState, useEffect } from "react";
import "./nav.scss";
import { Link, useLocation} from "react-router-dom";
import Logo from "./../../assets/UNGAR_NEW_LOGO.svg";

export default function UgNav() {
  const [varClicked, setClicked] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });
  var cLocation = useLocation();

  function changeClickedTo(num) {
    setClicked({
      1: num == 1 ? true : false,
      2: num == 2 ? true : false,
      3: num == 3 ? true : false,
      4: num == 4 ? true : false,
    });
  }

  useEffect(() => {
    if (location.pathname == "/") {
      changeClickedTo(1);
    } else if (location.pathname == "/content") {
      changeClickedTo(2);
    } else if (location.pathname == "/projects") {
      changeClickedTo(3);
    } else if (location.pathname == "/contact") {
      changeClickedTo(4);
    }
    return () => {};
  }, [cLocation.pathname]);

  if (location.pathname == "/login") {
    return (
      <div className="ug-nav-link-single_container">
        <Link className="ug-nav-link" to="/">
          <Logo
            height="120px"
            width="120px"
          />
        </Link>
      </div>
    );
  } else {
    return (
      <nav id="ug-nav-bar">
        <div className="ug-nav-element">
          <Link className="ug-nav-link" to="/">
            {/* <img className="ug-nav-link-icon" src={UngarLogoURL} width="50px" height="50px" stroke="red"/> */}
            <Logo
              height="50px"
              width="50px"
              className={
                varClicked[1]
                  ? "ug-nav-link-logo-true"
                  : "ug-nav-link-logo-false"
              }
            />
          </Link>
        </div>

        <div className="ug-nav-element">
          <Link className="ug-nav-link" to="/content">
            <span
              className={
                varClicked[2]
                  ? "ug-nav-element-sub ug-nav-element-selected_true"
                  : "ug-nav-element-sub ug-nav-element-selected_false"
              }
            >
              content
            </span>
          </Link>
        </div>

        <div className="ug-nav-element">
          <Link className="ug-nav-link" to="/projects">
            <span
              className={
                varClicked[3]
                  ? "ug-nav-element-sub ug-nav-element-selected_true"
                  : "ug-nav-element-sub ug-nav-element-selected_false"
              }
            >
              projects
            </span>
          </Link>
        </div>

        <div className="ug-nav-element">
          <Link
            className="ug-nav-link"
            to="/contact"
            // onClick={() => changeClickedTo(3)}
          >
            <span
              className={
                varClicked[4]
                  ? "ug-nav-element-sub ug-nav-element-selected_true"
                  : "ug-nav-element-sub ug-nav-element-selected_false"
              }
            >
              contact
            </span>
          </Link>
        </div>
      </nav>
    );
  }
}

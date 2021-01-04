// import UngarIcon from "./../../assets/Ungar-Icon.png";
import React, { useState, useEffect } from "react";
import "./nav.scss";
import { Link } from "react-router-dom";

//svgs
// import UngarLogoURL from "./../../assets/UNGAR_NEW_LOGO.svg";
// import UngarLogo from "./icon/UngarLogo.jsx";
// import {ReactComponent as UngarLogoIcon} from "./../../assets/UNGAR_NEW_LOGO.svg";
import Logo from "./../../assets/UNGAR_NEW_LOGO.svg";

export default function UgNav() {
  const [varClicked, setClicked] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  // const getClicked = () => {
  //   if (location.pathname == "/") {
  //     setClicked();
  //   } else if (location.pathname == "/content") {
  //     console.log("sadf");
  //   } else if (location.pathname == "/projects") {
  //     console.log("sadf");
  //   } else if (location.pathname == "/contact") {
  //   }
  // };

  function changeClickedTo(num) {
    setClicked({
      1: num == 1 ? true : false,
      2: num == 2 ? true : false,
      3: num == 3 ? true : false,
      4: num == 4 ? true : false,
      5: num == 5 ? true : false,
    });
  }

  useEffect(() => {
    if (location.pathname == "/") {
      changeClickedTo(1);
    } else if (location.pathname == "/content") {
      changeClickedTo(2);
    } else if (location.pathname == "/projects") {
      changeClickedTo(5);
    } else if (location.pathname == "/contact") {
      changeClickedTo(3);
    }
    return () => {};
  }, [location.pathname]);

  if (location.pathname == "/login") {
    return (
      <div className="ug-nav-link-single_container">
        <Link style={{cursor: "none"}}className="ug-nav-link" to="/">
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
                varClicked[5]
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
                varClicked[3]
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

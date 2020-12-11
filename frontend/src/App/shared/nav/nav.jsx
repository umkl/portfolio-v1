// import UngarIcon from "./../../assets/Ungar-Icon.png";
import React, { useState, useEffect } from "react";
import "./nav.scss";
// import UgNavname from "./elem/elem.jsx";
import { Link } from "react-router-dom";

const _ = require("lodash");

export default function UgNav() {
  const clicked = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  };

  const [varClicked, setClicked] = useState(clicked);

  const getClicked = () => {
    if (location.pathname == "/") {
      setClicked();
    } else if (location.pathname == "/content") {
      console.log("sadf");
    } else if (location.pathname == "/projects") {
      console.log("sadf");
    } else if (location.pathname == "/contact") {
    }
  };

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
      <nav id="ug-nav-bar">
        <div className="ug-nav-element">
          <Link
            className="ug-nav-link"
            to="/"
            // onClick={() => changeClickedTo(1)}
          >
            {/* <button onClick={changeClickedTo(1)}>change clioc</button> */}
            <span className="ug-nav-element-icon ug-nav-element-selected_true">
              U
            </span>
          </Link>
      

        </div>
      </nav>
    );
  } else {
    return (
      <nav id="ug-nav-bar">
        <div className="ug-nav-element">
          <Link
            className="ug-nav-link"
            to="/"
          >
            <span
              className={
                varClicked[1]
                  ? "ug-nav-element-icon ug-nav-element-selected_true"
                  : "ug-nav-element-icon ug-nav-element-selected_false"
              }
            >
              U
            </span>
          </Link>
        </div>
        <div className="ug-nav-element">
          <Link
            className="ug-nav-link"
            to="/content"
            // onClick={() => changeClickedTo(2)}
          >
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
          <Link
            className="ug-nav-link"
            to="/projects"
            // onClick={() => changeClickedTo(5)}
          >
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

        {/* <div className="ug-nav-element">
          <Link
            className="ug-nav-link"
            to="/about"
            onClick={() => changeClickedTo(4)}
          >
            <span
              className={
                varClicked[4]
                  ? "ug-nav-element-sub ug-nav-element-selected_true"
                  : "ug-nav-element-sub ug-nav-element-selected_false"
              }
            >
              about
            </span>
          </Link>
        </div> */}
      </nav>
    );
  }
}

// export default class UgNav extends Component {
//   constructor() {
//     super();
//     this.state = {
//       click : false,
//       clicked: {
//         1: true,
//         2: false,
//         3: false,
//         4: false,
//         5: false,
//       },
//     };
//     this.myRef = React.createRef();
//   }

//   changeClickedTo(num) {
//     this.setState({
//       clicked: {
//         1: num == 1 ? true : false,
//         2: num == 2 ? true : false,
//         3: num == 3 ? true : false,
//         4: num == 4 ? true : false,
//         5: num == 5 ? true : false,
//       },
//     });
//   }

//   render() {
//     return (
//       <nav id="ug-nav-bar">
//         <div ref={this.myRef} style={{color: 'green'}}>
//          ......
//         </div>

//         <UgNavname/>
//         <div className="ug-nav-element">
//           <Link className="ug-nav-link" to="/" onClick={() => changeClickedTo(1)}>
//             {/* <button onClick={changeClickedTo(1)}>change clioc</button> */}

//             <span
//               className={
//                 this.state.clicked[1]
//                   ? "ug-nav-element-icon ug-nav-element-selected_true"
//                   : "ug-nav-element-icon ug-nav-element-selected_false"
//               }
//             >
//               U
//             </span>
//           </Link>
//         </div>

//         <div className="ug-nav-element">
//           <Link className="ug-nav-link" to="/content">
//             <span
//               className={
//                 this.state.clicked[2]
//                   ? "ug-nav-element-sub ug-nav-element-selected_true"
//                   : "ug-nav-element-sub ug-nav-element-selected_false"
//               }
//             >
//               content
//             </span>
//           </Link>
//         </div>

//         <div className="ug-nav-element">
//           <Link className="ug-nav-link" to="/contact">
//             <span className="ug-nav-element-sub ug-nav-element-selected_false">
//               contact
//             </span>
//           </Link>
//         </div>

//         <div className="ug-nav-element">
//           <Link className="ug-nav-link" to="/about">
//             <span className="ug-nav-element-sub ug-nav-element-selected_false">
//               about
//             </span>
//           </Link>
//         </div>

//         <div className="ug-nav-element">
//           <Link className="ug-nav-link" to="/projects">
//             <span className="ug-nav-element-sub ug-nav-element-selected_false">
//               projects
//             </span>
//           </Link>
//         </div>

//       </nav>
//     );
//   }
// }

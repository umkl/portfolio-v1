// import UngarIcon from "./../../assets/Ungar-Icon.png";
import React, { useState, Component } from "react";
import "./nav.scss";
// import UgNavname from "./elem/elem.jsx";
import { Link } from "react-router-dom";

// export default function UgNav() {
//   const [isActive, setActive] = useState(false);

//   const toggleClass = () =>{
//     setActive(!isActive);
//   };

//   return (
//     <nav id="ug-nav-bar">
//       <div className="ug-nav-element">
//         <Link onClick={toggleClass} className="ug-nav-link" to="/" >
//           <span className={isActive? 'ug-nav-element-icon ug-nav-element-selected_false': 'ug-nav-element-icon' }>
//             U
//           </span>
//           {/* <img src={UngarIcon} alt="icon for ungar"></img> */}
//         </Link>
//       </div>

//       <div className="ug-nav-element">
//         <Link className="ug-nav-link" to="/content">
//         <span className={isActive? 'ug-nav-element-sub ug-nav-element-selected_false': 'ug-nav-element-sub' }>
//             content
//           </span>
//           {/* <img src={UngarIcon} alt="logo" id="i"/> */}
//         </Link>
//       </div>

//       <div className="ug-nav-element">
//         <Link className="ug-nav-link" to="/contact">
//           <span className="ug-nav-element-sub ug-nav-element-selected_false">
//             contact
//           </span>
//           {/* <img src={UngarIcon} alt="logo" id="i"/> */}
//         </Link>
//       </div>

//       <div className="ug-nav-element">
//         <Link className="ug-nav-link" to="/about">
//           <span className="ug-nav-element-sub ug-nav-element-selected_false">
//             about
//           </span>
//         </Link>
//       </div>

//       <div className="ug-nav-element">
//         <Link className="ug-nav-link" to="/projects">
//           <span className="ug-nav-element-sub ug-nav-element-selected_false">
//             projects
//           </span>
//         </Link>
//       </div>
//     </nav>
//   );
// }

// function sayHello(x){
//   console.log(x);
// }

export default function UgNav() {
  const clicked = {
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
  };

  const [varClicked, setClicked] = useState(clicked);

  function changeClickedTo(num) {
    setClicked({
      1: num == 1 ? true : false,
      2: num == 2 ? true : false,
      3: num == 3 ? true : false,
      4: num == 4 ? true : false,
      5: num == 5 ? true : false,
    });
  }
  if (location.pathname == "/login" || location.pathname == "/registration") {
    return(
    <nav id="ug-nav-bar">
      <div className="ug-nav-element">
        <Link className="ug-nav-link" to="/" onClick={() => changeClickedTo(1)}>
          {/* <button onClick={changeClickedTo(1)}>change clioc</button> */}
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
    </nav>
    )
  } else {
    return (
      <nav id="ug-nav-bar">
        <div className="ug-nav-element">
          <Link
            className="ug-nav-link"
            to="/"
            onClick={() => changeClickedTo(1)}
          >
            {/* <button onClick={changeClickedTo(1)}>change clioc</button> */}
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
            onClick={() => changeClickedTo(2)}
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
            onClick={() => changeClickedTo(5)}
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
            onClick={() => changeClickedTo(3)}
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

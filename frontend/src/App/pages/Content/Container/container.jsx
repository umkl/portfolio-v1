import "./Container.scss";
import Aos from "aos";
import { useSpring, animated as a } from "react-spring";
import React, { useRef } from "react";
import useOnScreen from "../../../utils/useOnScreen.jsx";
import { Link } from "react-router-dom";

const Container = (props) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const springProps = useSpring({
    opacity: isVisible ? 1 : 0,
    marginLeft: isVisible ? 0 : -500,
  });

  return (
    <Link className="ug-container-link" to={`/content/${props.heading}`}>
      <a.div ref={ref} style={springProps} className="ug-container">
        <div className="ug-container-heading">{props.heading}</div>
        <div className="ug-container-small_description">
          {props.description}
        </div>
      </a.div>
    </Link>
  );
};

export default Container;

// state = {
//   showBox: false
// };

// handleBoxToggle = () => this.setState({ showBox: !this.state.showBox });

// // componentDidMount(){
// //   var name = React.find
// // }

// render() {
//   return (
//     <div
//       onMouseEnter={this.handleBoxToggle}
//       onMouseLeave={this.handleBoxToggle}
//       className={`container${this.state.showBox ? " show" : ""}`}
//     >
//       <div className="wrapper">
//         <div className="innerBox" />
//       </div>
//     </div>
//   );
// }

// constructor(props) {
//   super(props);

//   this.state = {
//     hovered: false,
//   };
// }
// handleBoxToggle = () => this.setState({ hovered: !this.state.hovered});

//   propss = useSpring({
//     from: { opacity: 0, marginTop: 200 },
//     to: { opacity: 1, marginTop: 0 },
//   });
// render() {
//   return (
//     <div onMouseEnter={this.handleBoxToggle} style={{color: "pink"}} className="ug-container">
//       <div className="ug-container-heading">What is Ungar?</div>
//       <div className="ug-container-small_description">
//         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt sed
//         repellat ullam aut ut distinctio minus voluptatum aspernatur itaque
//         explicabo.
//       </div>
//     </div>
//   );
// }

// import React,{ useState, useEffect} from "react";
// import "aos/dist/aos.css";

// export default class UgContainer extends Component {
//     constructor(props){
//         super(props);
//     }
//     useEffect(() => {
//         effect
//         return () => {
//             cleanup
//         }
//     }, [input])

//     render() {
//         return (
//             <React.Fragment>
//             <div className="ug-container" >
//                 <div className="ug-container-heading">What is Ungar?</div>
//                 <div className="ug-container-small_description">Ungar is a platform where you can share blogs</div>
//             </div>
//             </React.Fragment>
//         )
//     }
// }

// export default Container;

// import React, { Component } from 'react'
import "./container.scss";
import Aos from "aos";
import { useSpring, animated } from "react-spring";
import React from "react";

class Container extends React.Component {
  render() {
    // const boxstyle = {
    //   width: "100px",
    //   height: "100px",
    //   backgroundColor: "green",
    //   // display: this.state.showBox ? "black" : "none"
    // };

    return (
      <React.Fragment>
        <div className="ug-container">
          <div className="ug-container-heading">{this.props.heading}</div>
          <div className="ug-container-small_description">
            {this.props.description}
          </div>
        </div>
      </React.Fragment>
    );
  }
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
}
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

export default Container;

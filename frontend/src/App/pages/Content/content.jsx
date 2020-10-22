import React, { Component, useState, useEffect } from "react";
import Container from "./Container/container.jsx";
import UgContainer from "./Container/container.jsx";
import { AnimatePresence, motion } from "framer-motion";
import "./content.scss";

// const Content = () => {
//   useEffect(() => {
//     Aos.init({duration: 2000});
//   }, [])
//   const fade = useSpring({
//     from: {
//       opacity: 0
//     },
//     to: {
//       opacity: 1
//     }
//   });
//   console.log(fade)

//   return (
//     <div className="ug-content" style={fade}>
//       {/* <button id="ug-button-1" onClick={buttonfunction}>test 1</button> */}
//       {/* <button >test 2</button> */}
//       <div className="ug-background_shader"></div>
//       {/* <Link
//       activeClass="active"
//       to="section1"
//       spy={true}
//       smooth={true}
//       offset={-70}
//       duration={500}
//       /> */}
//       <div className="ug-container-box">
//         <UgContainer />
//         <UgContainer />
//         <UgContainer />
//         <UgContainer />
//         <UgContainer />
//         <UgContainer />
//         <UgContainer />
//       </div>
//     </div>
//   );
// }

// class Content extends Component {
//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contributions: [],
      isLoaded: false,
    };
    // this.state = contributions
  }

  componentDidMount() {
    fetch("http://localhost:8080/contributions", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        // "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT, DELETE",
        "Access-Control-Allow-Headers": "*",
        // "Access-Control-Allow-Headers": "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization"
        // "Access-Control-Allow-Headers"
      },
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          contributions: json,
        }).catch(() => {
          console.log("error occurred");
        });
      });
  }

  render() {
    var { isLoaded, contributions } = this.state;
    if (!isLoaded) {
      return (
        <motion.div
          className="ug-content"
          exit={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="ug-loading">Loading</div>
        </motion.div>
      );
    } else {
      return (
        <motion.div
          className="ug-content"
          exit={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* <div className="ug-background_shader">adsf</div> */}
          
          
          
          
          <div className="ug-container-box">
            {contributions.map((x) => (
              <UgContainer
                key={x.ID}
                heading={x.Heading}
                description={x.Description}
              />
            ))}
          </div>


          {/* <div className="ug-menu_shadow"/> */}
        </motion.div>
      );
    }
  }
}

export default Content;

// fetch("http://localhost:8080/contributions")
//   .then(respone => response.text())
//   .then(contents => console.log(contents))
//   .catch(()=> console.log("cant access"))

// .then((json) => {
//   this.setState({
//     isLoaded: true,
//     contributions: json,
//   });
//   }
// );

// if (!isLoaded) {
//   return (
//     <div className="ug-content">
//       <div className="ug-background_shader"></div>
//       <div style={{ color: "green", position: "relative" }}>Loading...</div>
//     </div>
//   );
// } else {
//   return (

//     <div className="ug-content">
//       <div className="ug-background_shader"></div>
//       <div className="ug-container-box">
//         {contributions.map((x) => (
//           <UgContainer heading={x.title} description={x.id} />
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { Component, useState, useEffect } from "react";
import UgContainer from "./Container/container.jsx";
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
  // contributions = [
  //   {
  //     id: 1,
  //     heading: "How to code!",
  //     description: "Coding can be done by using a TextEditor",
  //   },
  //   {
  //     id: 2,
  //     heading: "how to 2",
  //     description: "twooo",
  //   },
  // ];

  constructor(props) {
    super(props);
    this.state = {
      contributions: [],
      isLoaded: false,
    };
    // this.state = contributions
  }

  componentDidMount() {
    // fetch("http://localhost:8080/contributions")
    //   .then(respone => response.text())
    //   .then(contents => console.log(contents))
    //   .catch(()=> console.log("cant access"))
    fetch("http://localhost:8080/contributions")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          contributions: json,
        })
        // this.setState({
        //   isLoaded: true,
        //   items: json
        // })
      });
    // .then((json) => {
    //   this.setState({
    //     isLoaded: true,
    //     contributions: json,
    //   });
    //   }
    // );
  }

  render() {
    var { isLoaded, contributions } = this.state;

    if(!isLoaded){
      return <div style={{color: "green"}}>
        Loading
      </div>
    }
    else{
      return(
        <div>
          {
            contributions.map(item =>(
              <li style={{color: "green"}}key={item.id}>
                Name: {item.Heading} | {item.Description}
              </li>
            ))
          }
        </div>
      )
    }
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
  }
}

export default Content;

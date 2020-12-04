import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import UgProject from "./Project/project.jsx";
import "./projects.scss";
import { AnimatePresence, motion } from "framer-motion";
// import React from 'react'

const Projects = () => {
  const API_URL = "http://localhost:8080/projects";
  const [projects, setProjects] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  
  const currentProject = 0;


  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setProjects(data);
    setLoaded(true);
  };


  const nextProject = () => {
    currentProject++;
  };

  const previousProject = () => {};

  useEffect(() => {
    setInterval(nextProject, 5000);
  }, []);

  if (!isLoaded) {
    return (
      <motion.div
        className="ug-projects"
        exit={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="ug-loading">Loading</div>
      </motion.div>
    );
  } else {
    return (
      <React.Fragment>
        <motion.div
          className="ug-projects"
          exit={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          
        >
          <div className="ug-project-box-container">
            <div className="ug-project-box">
              {projects.map((x) => (
                <UgProject
                  
                  key={x.ID}
                  Title={x.Title}
                  Description={x.Description}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </React.Fragment>
    );
  }
};
export default Projects;

// class Content extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       contributions: [],
//       isLoaded: false,
//     };
//     // this.state = contributions
//   }

//   componentDidMount() {

//     fetch("http://localhost:8080/contributions", {
//       method: "get",
//       headers: {
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Methods": "*",
//         // "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT, DELETE",
//         "Access-Control-Allow-Headers": "*",
//         // "Access-Control-Allow-Headers": "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization"
//         // "Access-Control-Allow-Headers"
//       },
//     })
//       .then((response) => response.json())
//       .then((json) => {
//         this.setState({
//           isLoaded: true,
//           contributions: json,
//         }).catch(() => {
//           console.log("error occurred");
//         });
//       });
//   }

//   render() {
//     console.log(window.scrollY);
//     var { isLoaded, contributions } = this.state;
//     if (!isLoaded) {
//       return (
//         <motion.div
//           className="ug-content"
//           exit={{ opacity: 1 }}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//         >
//           <div className="ug-loading">Loading</div>
//         </motion.div>
//       );
//     } else {
//       return (
//         <motion.div
//           className="ug-content"
//           exit={{ opacity: 1 }}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//         >
//           <div className="ug-background_shader"></div>

//           <div className="ug-container-box">
//           <div style={{"backgroundColor": "transparent", "height": "100px", "width": "100%"}}></div>
//             {contributions.map((x) => (
//               <UgContainer
//                 key={x.ID}
//                 heading={x.Heading}
//                 description={x.Description}
//               />
//             ))}
//           </div>

//           {/* <div className="ug-menu_shadow"/> */}
//         </motion.div>
//       );
//     }
//   }
// }

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

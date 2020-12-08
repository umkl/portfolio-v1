import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {useSpring, animated as a} from "react-spring";

//UgProject
import UgProject from "./Project/project.jsx";

//projects
import "./projects.scss";


const Projects = () => {
  //variables
  const API_URL = "http://localhost:8080/projects";
  const [currentProject, setCurrentProject] = useState(0);
  const [projects, setProjects] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [intervalId, setIntervalId] = useState();
  const [projectSize, setProjectSize] = useState();

  

  // const prevSlideStyle = {

  // }

  // const curSlideStyle = {
    
  // }

  

  //api fetch
  useEffect(() => {
    loadData();
  }, []);

  useEffect(
    ()=>{
      const id = setInterval(nextProject, 2000);
      setIntervalId(id)
      return(
        ()=>{
          clearInterval(id);
        }
      );
    },[projects])
  
  const loadData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setProjects(data);
    setLoaded(true);
  };

  //carousel functions
  const nextProject = () => {
    console.log("wuow")
      setCurrentProject((c)=>{
        return (c+1)%projects.length;
      } );
  };

  const previousProject = () => {
    setCurrentProject((c)=>{
      return (c-1)%projects.length;
    } );
  };

  const carouselSpring = useSpring(
    {
      to:{marginLeft: `-${currentProject*100}vw`},
      from:{marginLeft: `-${currentProject==0?currentProject:currentProject-1*100}vw`}
    }
    
  )

//returning DOM
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
      <motion.div
        className="ug-projects"
        exit={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="ug-project-box-container" style={carouselSpring}>
          <div className="ug-project-box">
            {projects.map((x) => (
              <UgProject
                key={x.ID}
                active={projects.indexOf(x) == currentProject}
                Title={x.Title}
                Description={x.Description}
              />
            ))}
          </div>
        </div>
      </motion.div>
    );
  }
};

export default Projects;

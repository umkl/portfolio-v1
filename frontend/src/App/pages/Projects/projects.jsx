import React, {
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
  useRef,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { config, useTransition, useSpring, animated as a } from "react-spring";

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
  // const [intervalId, setIntervalId] = useState();

  //useSpring example transition handler
  const [projectSize, setProjectSize] = useState();

  const [index, setIndex] = useState(0);

  const handleIndexChange = useCallback(
    () => setIndex((state) => (state + 1) % 3),
    []
  );

  const projectTransitions = useTransition(index, (p) => p, {
    from: { opacity: 0, transform: "translate3d(100%,0,0) scale(0.5,0.5)" },
    enter: { opacity: 1, backgroundColor: "white", transform: "translate3d(0%,0,0) scale(1,1)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0) scale(0.5,0.5)" },
    config: { ...config.molasses, duration: 500 },
  });
  //useSpring example transition handler

  //api fetch
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setProjects(data);
    setLoaded(true);
  };
  //api fetch

  //my carousel functions
  // useEffect(
  //   ()=>{
  //     const id = setInterval(nextProject, 2000);
  //     setIntervalId(id)
  //     return(
  //       ()=>{
  //         clearInterval(id);
  //       }
  //     );
  //   },[projects])

  // const nextProject = () => {
  //   console.log("wuow");
  //   setCurrentProject((c) => {
  //     return (c + 1) % projects.length;
  //   });
  // };

  // const previousProject = () => {
  //   setCurrentProject((c) => {
  //     return (c - 1) % projects.length;
  //   });
  // };

  // const carouselSpring = useSpring({
  //   to: { marginLeft: `-${currentProject * 100}vw` },
  // });
  // const carouselCalback = useCallback(() => {
  //   return useSpring({
  //     to: { marginLeft: `-${currentProject * 100}vw` },
  //   });
  // }, [currentProject]);
  //my carousel functions

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
        {/* <div className="ug-project-box-container" style={carouselCalback}>
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
        </div> */}
        <div onClick={handleIndexChange} className="ug-project-diashow">
          {projectTransitions.map(({ item, props, key }) => {
            const Project = projects[item];
            return (
              <UgProject
                Title={Project.Title}
                Description={Project.Description}
                key={key}
                style={props}
              />
            );
          })}
        </div>
      </motion.div>
    );
  }
};

export default Projects;

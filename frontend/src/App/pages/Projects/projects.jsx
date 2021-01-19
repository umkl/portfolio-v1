import React, {
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
  useRef,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { config, useTransition, useSpring, animated as a } from "react-spring";
import _uniqueId from 'lodash/uniqueId';

//UgProject
import UgProject from "./Project/project.jsx";

//projects
import "./projects.scss";

const Projects = () => {
  //local projects
  const projectsJSON = [
    {
      // "_id" : ObjectId("5fa14938ee9eac91770b019b"),
      "_id": _uniqueId('prefix-'),
      "Title" : "Project1",
      "Description" : "this is project 1"
    },
    {
      // "_id" : ObjectId("5fa1a06bee9eac91770b019c"),
      "_id": _uniqueId('prefix-'),
      "Title" : "Neighboroo",
      "Description" : "neighboroo is a mobile phone project"
    },
    {
      // "_id" : ObjectId("5fca3b868563ccc69477a6dd"),
      "_id": _uniqueId('prefix-'),
      "Title" : "test",
      "Description" : "this is a test 3"
    },
    {
      "_id": _uniqueId('prefix-'),
      "Title" : "Trailer",
      "Description" : "this is a test 3"
    }
  ]

  //variables
  const API_URL = "http://localhost:8080/projects";
  const [currentProject, setCurrentProject] = useState(0);
  const [projects, setProjects] = useState(projectsJSON);
  const [isLoaded, setLoaded] = useState(true);
  
  const [projectSize, setProjectSize] = useState();

  const [index, setIndex] = useState(0);

  const handleIndexChange = useCallback((titleName) => {
    projects.find((elem) => {
      if (elem.Title == titleName) {
        let l = projects.indexOf(elem);
        setIndex(l);
      }
    }),
      [];
  });

  const projectTransitions = useTransition(index, (p) => p, {
    from: { opacity: 0, transform: "translate3d(0,0,0) scale(0.5,0.5)" },
    enter: {
      opacity: 1,
      transform: "translate3d(0,0,0) scale(1,1)",
    },
    leave: { 
      opacity: 0,
      transform: "translate3d(0,0,0) scale(0.5,0.5)" },
  });
  //useSpring example transition handler

  //api fetch
  // useEffect(() => {
  //   loadData();
  // }, []);

  // const loadData = async () => {
  //   const response = await fetch(API_URL);
  //   const data = await response.json();
  //   setProjects(data);

  //   setLoaded(true);
  // };
  //api fetch


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
        <div className="ug-project-diashow">
          {projectTransitions.map(({ item, props, key }) => {
            const Project = projects[item];
            return (
              <UgProject
                key={Project._id}
                Title={Project.Title}
                Description={Project.Description}
                key={key}
                style={props}
              />
            );
          })}
        </div>

        <div className="ug-project-navigator">
          {projects.map((x) => {
            if (x.Title == projects[index].Title) {
              return (
                <div
                  key={x._id}
                  className="ug-project-navigator-dot-active"
                ></div>
              );
            } else {
              return (
                <div
                  onClick={() => handleIndexChange(x.Title)}
                  key={x._id}
                  className="ug-project-navigator-dot"
                ></div>
              );
            }
          })}
        </div>
      </motion.div>
    );
  }
};

export default Projects;

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
import UgProject from "./Project/project.jsx";
import "./projects.scss";
import NeighborooImage from "./../../assets/Neighboroo/NeighborooMockup.png"
import trailerPlaceHolder from "./../../assets/Neighboroo/NeighborooMockup.png"

const Projects = () => {
  //local projects
  const imageArray = [
    NeighborooImage,
    trailerPlaceHolder
  ]

  const projectsJSON = [
    {
      // "_id" : ObjectId("5fa14938ee9eac91770b019b"),
      "_id": _uniqueId('prefix-'),
      "Title" : "Neighboroo",
      "Slogan" : "Bringing Neighbors together",
      "Description" : "Neighboroo is a Flutter Project. jaskldfjaskldfjlkaösdjfölkasdjlöskdfjkalösdjfklsdjlöfkasjdflkajs",
      "Link":"Link to the Github Project",
      "Image": require("./../../assets/Neighboroo/NeighborooMockup.png"),
      "LinkURL":"https://github.com/ungarmichael/neighboroo",
      "ImageID":0
    },
    {
      "_id": _uniqueId('prefix-'),
      "Title" : "Trailer",
      "Description" : "this is a test 3",
      "ImageID":0,
      "Image": "./../../assets/Neighboroo/NeighborooMockup.png",
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
    from: { opacity: 0, transform: "translate3d(0,0,0) scale(0.5,0.5) " },
    enter: {
      opacity: 1,
      transform: "translate3d(0,0,0) scale(1,1) ",
    },
    leave: { 
      opacity: 0,
      transform: "translate3d(0,0,0) scale(0.5,0.5) " },
  });

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
                Slogan={Project.Slogan}
                Link={Project.Link}
                Image={imageArray[item]}
                Description={Project.Description}
                LinkURL={Project.LinkURL}
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

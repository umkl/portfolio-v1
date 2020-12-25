import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//ug components
import UgArrow from "../../shared/arrow/arrow.jsx";
import UgBar from "../../shared/bar/bar.jsx";
import UgAboutCard from "./about/about.jsx";

//ug hooks
import useBreakpointInText from "./../../utils/useBreakpointInText.jsx";
import useOnScreen from "./../../utils/useOnScreen.jsx";

// import ungarFullLogo from "./../../assets/UNGAR-FULL.svg";
import FullLogo from "./../../assets/UNGAR-FULL.svg";

import "./foyer.scss";

//3rd party libraries
import { AnimatePresence, motion } from "framer-motion";
import { useSpring, useSprings, animated as a } from "react-spring";

const queries = {
  xs: "(max-width: 320px)",
  sm: "(max-width: 720px)",
  md: "(max-width: 1130px)",
};

export default function Foyer() {
  //scrolling to about method
  const scrollingToAbout = () => {
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  };

  // const [scrollValue, setScrollValue] = useState(0);
  // aboutData = [
  //     {
  //       name:"what",
  //       visible: false
  //     },
  //     {
  //       name:"why",
  //       visible: false
  //     },
  //     {
  //       name:"who",
  //       visible: false
  //     },
  //     {
  //       name:"where",
  //       visible: false
  //     },

  //   ]

  // const [aboutVisibility, setAboutVisibility] = useState({
  //   "what":false,
  //   "why":false,
  //   "who":false,
  //   "where":false,
  // });

  // const passingScrollEventValue = () =>{
  //   setScrollValue(window.scrollY);
  // }

  // useEffect(()=>{
  //   window.addEventListener("scroll", passingScrollEventValue);

  //   return(
  //     ()=>{
  //       window.removeEventListener("scroll", passingScrollEventValue);
  //     }
  //   )
  // }, []);

  const [isLoaded, setLoaded] = useState(false);

  const ugFoyerNameSpring = useSpring({
    opacity: isLoaded ? 1 : 0,
    marginTop: isLoaded ? 0 : -500,
  });

  const ugFoyerAboutHeadingSpring = useSpring({
    opacity: isLoaded ? 1 : 0,
    marginTop: isLoaded ? 0 : -100,
  });

  useEffect(() => {
    setLoaded(true);
  }, []);

  const matchPoints = useBreakpointInText(queries);

  // console.log(typeof matchPoints);
  if (matchPoints !== null) {
    if (matchPoints.md) {
      console.log("md");
    }
    if (matchPoints.sm) {
      console.log("sm");
    }
    if (matchPoints.sx) {
      console.log("sx");
    } else {
    }
  }

  return (
    <motion.div
      className="ug-foyer"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="ug-foyer-intro">
        <a.div
          style={ugFoyerAboutHeadingSpring}
          onClick={scrollingToAbout}
          className="ug-foyer-intro-about"
        >
          about
        </a.div>
        <div id="ug-foyer-box">
          <a.div className="ug-foyer-name" style={ugFoyerNameSpring}>
            <FullLogo width="800" height="200" className="fullLogo" />
          </a.div>
          <div className="ug-foyer-text">Programming and Designing</div>
          <div className="ug-foyer-text">Blogs and Videos</div>
        </div>
      </div>

      <UgAboutCard
        heading="Who?"
        description="My Name is Ungar Michael and I am developing App and Software solutions since I am 14 years old. My first two programming languages where Java and C#. My preferred frameworks for Web Apps are React and Vue. I also tend to use TypeScript, Scss and the VSCode TextEditor to make my life easier. Due to my high experience in React I also used React Native to create Mobile Apps, but right now I am doing a lot with flutter because it has great support."
      />

      <UgAboutCard
        heading="What?"
        description="I create and design Web and Mobileapplications using the latest and greatest technologies. Recently I also got into blogging and videocreation which I also share on this website. Check it out here: kjkdlsa. "
      />

      <UgAboutCard
        heading="Why?"
        description="Nowadays it is quite important to go with the digitalisation-trend and that is why especially young business-owners look consider purchasing high-quality web-representations. "
      />

      <UgAboutCard
        heading="Where?"
        description="I am from Austria and was able to enjoy a good education for informatics, economics and programming."
      />
    </motion.div>
  );
}

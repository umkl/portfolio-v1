import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UgArrow from "../../shared/arrow/arrow.jsx";
import UgBar from "../../shared/bar/bar.jsx";
import UgAboutCard from "./about/about.jsx";
import useBreakpointInText from "./../../utils/useBreakpointInText.jsx";
import useOnScreen from "./../../utils/useOnScreen.jsx";
import FullLogo from "./../../assets/UNGAR-FULL.svg";
import { AnimatePresence, motion } from "framer-motion";
import { useSpring, useSprings, animated as a } from "react-spring";
import "./foyer.scss";

export default function Foyer() {
  const [isLoaded, setLoaded] = useState(false);

  const ugFoyerNameSpring = useSpring({
    opacity: isLoaded ? 1 : 0,
    marginTop: isLoaded ? 0 : -500,
  });

  const ugFoyerAboutHeadingSpring = useSpring({
    opacity: isLoaded ? 1 : 0,
    marginTop: isLoaded ? 0 : -100,
  });

  const [, setY] = useSpring(() => ({ y: 0 }))

  useEffect(() => {
    setLoaded(true);
  }, []);

  // const scrollingToAbout = () => {
  //   window.scrollTo({
  //     behavior: "smooth",
  //     top: 500
  //   });
  // };

  // const [y, setY] = useSpring(() => ({
  //   immediate: false,
  //   y: window.scrollY,
  //   config: config.stiff,
  //   onRest: () => {
  //     setLock(false);
  //   },
  //   onFrame: (props: any) => {
  //     window.scroll(0, props.y);
  //   }
  // }));

  return (
    <motion.div
      className="ug-foyer"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
      <div className="ug-foyer-intro">
        <a.div
          style={ugFoyerAboutHeadingSpring}
          onClick={()=>{
            setY({
              y: 500,
              reset: true,
              from: { y: window.scrollY },
              onFrame: props => window.scroll(500, props.y)
            })
          }}
          className="ug-foyer-intro-about">
          about
        </a.div>
        <div id="ug-foyer-box">
          <a.div className="ug-foyer-name" style={ugFoyerNameSpring}>
            <FullLogo width="80%" height="200" className="fullLogo" />
          </a.div>
          <div className="ug-foyer-text">Programming and Blogging</div>
        </div>
      </div>
      <UgAboutCard
        heading="Who am I ?"
        description="My Name is Ungar Michael and my Passion is to develop and organise Softwareprojects. I really love learning new things and improving myself."
      />

      <UgAboutCard
        heading="What am I doing ?"
        description="I plan, design and create Mobile- and Webapplications. I also started to create content in form of blogs and videos in order to share my thoughts, experiences and opinions with an audience.  "/>

    </motion.div>
  );
}

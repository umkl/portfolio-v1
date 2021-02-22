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
        heading="Who are you?"
        description="My Name is Ungar Michael and I am developing App and Software solutions since I am 14 years old. My first two programming languages where Java and C#. My preferred frameworks for Web Apps are React and Vue. I also tend to use TypeScript, Scss and the VSCode TextEditor to make my life easier. Due to my high experience in React I also used React Native to create Mobile Apps, but right now I am doing a lot with flutter because it has great support."
      />

      <UgAboutCard
        heading="What are you doing?"
        description="I plan, design and create Mobile- and Webapplications using the newest technoligies. I also like to share my experiences and konwledge with others and that is why I like to write blogs about various topics."/>

      <UgAboutCard
        heading="Why are you doing it?"
        description="Nowadays it is quite important to go with the digitalisation-trend and that is why especially business-owners should consider purchasing high-quality web-representations. "
      />

      <UgAboutCard
        heading="Where are you from?"
        description="I am from Austria and I was able to enjoy a good education for informatics, economics and programming."
      />
    </motion.div>
  );
}

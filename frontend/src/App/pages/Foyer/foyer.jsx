import React from "react";
import "./foyer.scss";
import { AnimatePresence, motion } from "framer-motion";
import UgArrow from "../../shared/arrow/arrow.jsx";
import { useSpring, animated } from "react-spring";
import UgAboutCard from "./about/about.jsx";

export default function Foyer() {
  return (
    <motion.div
      className="ug-foyer"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="ug-foyer-intro">
        <div className="ug-foyer-intro-about">about</div>
        <div className="ug-foyer-intro-content">content</div>
        <div id="ug-foyer-box">
          <div className="ug-foyer-name">Ungar</div>
          <div className="ug-foyer-text">
            Motivation, Passion and Experience
          </div>
          {/* <UgArrow location="right" /> */}
        </div>
        {/* <div className="hello">hello</div> */}
      </div>

      {/* //about div */}
      <UgAboutCard heading="What?" description="i dunojsdflkö" />
      <UgAboutCard heading="Why?" description="i dunojsdflkö" />
      <UgAboutCard
        heading="Who?"
        description="My Name is Ungar Michael and I am developing App and Software solutions since I am 14 years old. My first two programming languages where Java and C#. My preferred frameworks for Web Apps are React and Vue. I also tend to use TypeScript, Scss and the VSCode TextEditor to make my life easier. Due to my high experience in React I also used React Native to create Mobile Apps, but right now I am doing a lot with flutter because it has great support.
        I would be glad if you choose me to implement your ideas. Have a nice day."
      />
      

      <div className="ug-foyer-shadow"></div>
    </motion.div>
  );
}

import React from "react";
import "./foyer.scss";
import { AnimatePresence, motion } from "framer-motion";
import UgArrow from "../../shared/arrow/arrow.jsx";
import { useSpring, animated } from "react-spring";
import UgAboutCard from "./about/about.jsx";
import UgBar from "../../shared/bar/bar.jsx";
import {Link} from "react-router-dom";
// import {useSpring, animated} from 'react-spring';

export default function Foyer() {
  const scrollingToAbout = () => {
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
    // window.scrollBy({ top: 100, behavior: 'smooth' });
  };

  // const fade = useSpring({
  //   color: 'green',
  //   transform:
  // })

  return (
    <React.Fragment>
      <motion.div
        className="ug-foyer"
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="ug-foyer-intro">
          <div onClick={scrollingToAbout} className="ug-foyer-intro-about">
            about
          </div>
          <Link to="/content"><div className="ug-foyer-intro-content">content</div></Link>
          <animated.div id="ug-foyer-box">
            <div className="ug-foyer-name">Ungar</div>
            <div className="ug-foyer-text">
              Programming, Designing and Blogging
            </div>
            {/* <UgArrow location="right" /> */}
          </animated.div>
          {/* <div className="hello">hello</div> */}
        </div>

        {/* //about div */}
        <UgAboutCard
          heading="What?"
          description="We create modern Websites, beautiful Mobile-apps and breathtaking Designs.
        We also like to share experiences, passion and motivation that is why we created blog-content on our website.
        Recently we also discovered that editing videos and images can play a big part in those fields so we also trained our self in that field.
        "
        />
        <UgAboutCard
          heading="Why?"
          description="We are confinced that a solid"
        />
        <UgAboutCard
          heading="Who?"
          description="My Name is Ungar Michael and I am developing App and Software solutions since I am 14 years old. My first two programming languages where Java and C#. My preferred frameworks for Web Apps are React and Vue. I also tend to use TypeScript, Scss and the VSCode TextEditor to make my life easier. Due to my high experience in React I also used React Native to create Mobile Apps, but right now I am doing a lot with flutter because it has great support.
        I would be glad if you choose me to implement your ideas. Have a nice day."
        />
        <UgAboutCard
          heading="Where?"
          description="We are all from the beautiful country Austria were we also attended multiple schools for Informatics, Economics and Programming."
        />

        <div className="ug-foyer-shadow"></div>
      </motion.div>
    </React.Fragment>
  );
}

import React, { useRef, useState } from "react";
import { Route, Switch } from "react-router-dom";
import './scss/App.scss'
import About from "./pages/About/about.jsx";
import Projects from "./pages/Projects/projects.jsx";
import Content from "./pages/Content/content.jsx";
import Contact from "./pages/Contact/contact.jsx";
import Error from "./pages/Error/error.js";
import Foyer from "./pages/Foyer/foyer.jsx";
import UgBar from "./shared/bar/bar.jsx";

// import MouseTooltip from 'react-sticky-mouse-tooltip';

import { AnimatePresence, motion } from "framer-motion";

function App() {
  // const cursorRef = useRef(null);
  // const [cursor, setCursor] = useState(cursorRef);
  // const [isMouseTooltipVisible, setMouseTooltipVisibility] = useState(true)
  const [cursorState, setCursorState] = useState({ x: 0, y: 0, classnames:""});
  const [cursorClass, setCursorClass] = useState("ug-cursor");

  const _onMousemove = (e) => {
    // console.log(e.screenX);
    // console.log(cursorStyle.top)
    // console.log(e.pageX);
    // console.log(cursorStyle.left)
    // console.log(e.pageY);
    setCursorState({ x: e.pageX, y: e.pageY });
  };

  const cursorStyle = {
    top: `${cursorState.y}px`,
    left: `${cursorState.x }px`,
    // position: "absolute",
    // width: "3rem",
    // height: "3rem",
    // border: "2px solid green",
    // borderRadius: "50%",
    // transform: "translate(-50%,-50%)",
  };
  const name = "ug-cursor";

  const getCursorClasses = () =>{
      return cursorClass
  }

  return (
    <>
      {/* ref={cursorRef} */}
      
      <div onMouseMove={_onMousemove.bind(this)}>
      <div className={getCursorClasses()} style={cursorStyle}></div>
        <AnimatePresence>
          <Switch className="ug-switch">
            <Route exact path="/" component={Foyer}></Route>
            <Route path="/Projects" component={Projects}></Route>
            <Route path="/Content" component={Content}></Route>
            <Route path="/Contact" component={Contact}></Route>
            <Route path="/About" component={About}></Route>
            <Route component={Error}></Route>
          </Switch>
        </AnimatePresence>
        <UgBar />
      </div>
    </>
  );
}

export default App;

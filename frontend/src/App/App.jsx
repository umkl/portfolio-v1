import Projects from "./pages/Projects/projects.jsx";
import Content from "./pages/Content/content.jsx";
import Contact from "./pages/Contact/contact.jsx";
import Error from "./pages/Error/error.js";
import Foyer from "./pages/Foyer/foyer.jsx";
import Login from "./pages/Login/login.jsx";
// import Registration from "./pages/Registration/registration.jsx"

import UgBar from "./shared/bar/bar.jsx";
import "./scss/App.scss";
import React, { useRef, useState, useCallback, useLayoutEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import { AnimatePresence, motion } from "framer-motion";
import { SearchProvider } from "./context/SearchContext.js";

function App() {
  // const cursorRef = useRef(null);
  // const [cursor, setCursor] = useState(cursorRef);
  // const [isMouseTooltipVisible, setMouseTooltipVisibility] = useState(true)
  // const [scrollPosition, setScrollPosition] = useState(0);
  // useLayoutEffect(() => {
  //   function updatePosition(){
  //     setScrollPosition(window.pageYOffset);
  //   }
  //   window.addEventListener('scroll',updatePosition);
  //   updatePosition();
  //   return () => window.removeEventListener('scroll', updatePosition);
  // }, []);

  const [cursorState, setCursorState] = useState({
    x: 0,
    y: 0,
    classnames: "",
  });
  const [cursorClass, setCursorClass] = useState("ug-cursor");

  // const _onScroll = (e) =>

  const _onMousemove = useCallback(
    (e) => {
      // console.log(e.screenX);
      // console.log(cursorStyle.top)
      // console.log(e.pageX);
      // console.log(cursorStyle.left)
      // console.log(e.pageY);
      setCursorState({ x: e.pageX, y: e.pageY });
    },
    [cursorState]
  );

  // const _onMouseDown = (e) =>{

  // }

  const cursorStyle = {
    top: `${cursorState.y}px`,
    left: `${cursorState.x}px`,
    // position: "absolute",
    // width: "3rem",
    // height: "3rem",
    // border: "2px solid green",
    // borderRadius: "50%",
    // transform: "translate(-50%,-50%)",
  };
  const name = "ug-cursor";

  const getCursorClasses = () => {
    return cursorClass;
  };

  return (
    <div onMouseMove={_onMousemove.bind(this)}>
      <div className={getCursorClasses()} style={cursorStyle}></div>
      <SearchProvider>
        <UgBar />
        <AnimatePresence>
          <Switch className="ug-switch">
            <Route exact path="/" component={Foyer}></Route>
            <Route path="/projects" component={Projects}></Route>
            <Route path="/content" component={Content} />
            <Route path="/contact" component={Contact}></Route>
            <Route path="/login" component={Login}></Route>
            {/* <Route path="/registration" component={Registration}></Route> */}
            <Route component={Error}></Route>
          </Switch>
        </AnimatePresence>
      </SearchProvider>
    </div>
  );
}

export default React.memo(App);

// //action(increment)
// const increment = () => {
//   return {
//     type: "INCREMENT", //action name
//   };
// };

// const decrement = () => {
//   return {
//     type: "DECREMENT", //action name
//   };
// };

// //reducer
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//   }
// };

// //store
// let store = createStore(counter);

// store.subscribe(() => console.log(store.getState()));

// //dispatch
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());
// // import MouseTooltip from 'react-sticky-mouse-tooltip';

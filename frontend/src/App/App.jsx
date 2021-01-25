import Projects from "./pages/Projects/projects.jsx";
import ContentSwitch from "./pages/Content/ContentSwitch/ContentSwitch.jsx";
import Contact from "./pages/Contact/contact.jsx";
import Foyer from "./pages/Foyer/foyer.jsx";
import Login from "./pages/Login/login.jsx";
import Error from "./pages/Error/error.js";

import UgBar from "./shared/bar/bar.jsx";
import "./scss/App.scss";
import React, {
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
  useContext,
} from "react";
import { Route, Switch } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { SearchProvider } from "./context/SearchContext.js";
import { BlurProvider } from "./context/BlurContext.js";

function App() {

  // const [cursorClass, setCursorClass] = useState("ug-cursor");
  
  // const [cursorState, setCursorState] = useState({
  //   x: 0,
  //   y: 0,
  //   classnames: "",
  // });

  // const _onMousemove = useCallback(
  //   (e) => {
  //     setCursorState({ x: e.pageX, y: e.pageY });
  //   },
  //   [cursorState]
  // );

  // const cursorStyle = {
  //   top: `${cursorState.y}px`,
  //   left: `${cursorState.x}px`,
  // };
  // const name = "ug-cursor";

  return (
    // <div onMouseMove={_onMousemove.bind(this)}>
    <div>
      {/* <div className={getCursorClasses()} style={cursorStyle}></div> */}
      <SearchProvider>
        <BlurProvider>
          <UgBar />
          <AnimatePresence>
            <Switch className="ug-switch">
              <Route exact path="/" component={Foyer}></Route>
              <Route path="/projects" component={Projects}></Route>
              <Route path="/content" component={ContentSwitch}></Route>
              <Route path="/contact" component={Contact}></Route>
              <Route path="/login" component={Login}></Route>

              {/* <Route path="/registration" component={Registration}></Route> */}
              <Route path="*" component={Error}></Route>
            </Switch>
          </AnimatePresence>
        </BlurProvider>
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

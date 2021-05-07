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
import { AnimatePresence } from "framer-motion";
import { SearchProvider } from "./context/SearchContext.js";
import { BlurProvider } from "./context/BlurContext.js";


function App() {
  return (
    <div>
      <SearchProvider>
        <BlurProvider>
          <UgBar />
          <AnimatePresence>
            <Switch>
              <Route exact path="/" component={Foyer}></Route>
              <Route path="/projects" component={Projects}></Route>
              <Route path="/content" component={ContentSwitch}></Route>
              <Route path="/contact" component={Contact}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="*" exact={true} component={Error}></Route>
            </Switch>
          </AnimatePresence>
        </BlurProvider>
      </SearchProvider>
    </div>
  );
}

export default App;

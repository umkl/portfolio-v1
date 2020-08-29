import React from "react";
import { Route, Switch } from "react-router-dom";

import About from "./components/about/about.js";
import Projects from "./components/projects/projects.js";
import Content from "./components/content/content.js";
import Contact from "./components/contact/contact.js";
import Error from "./components/error/error.js";
import Foyer from "./components/foyer/foyer.js";

function App() {
  return (
    <React.Fragment>
      <Route path="/" component={About}></Route>
      <Route path="/Projects" component={Projects}></Route>
      <Route path="/Content" component={Content}></Route>
    </React.Fragment>
  );
}

export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";

import About from "./pages/About/about.js";
import Projects from "./pages/Projects/projects.js";
import Content from "./pages/Content/content.js";
import Contact from "./pages/Contact/contact.js";
import Error from "./pages/Error/error.js";
import Foyer from "./pages/Foyer/foyer.js";

function App() {
  return(
    <React.Fragment>
      <Switch>
      <Route exact path="/" component={About}></Route>
      <Route path="/Projects" component={Projects}></Route>
      <Route path="/Content" component={Content}></Route>
      <Route path="/Contact" component={Contact}></Route>
      <Route path="/Foyer" component={Foyer}></Route>
      <Route component={Error}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;

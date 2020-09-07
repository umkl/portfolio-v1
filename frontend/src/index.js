import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App/App.jsx";
// import img from "./App/assets/Ungar-Icon.png";

const img = document.createElement("img")

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  // <img src={img}></img>,
  document.getElementById("root")
);

import React, { useState, useEffect, useContext } from "react";
import Head from "./ContentSwitch/ContentSwitch.jsx";
import UgContainer from "./Container/Container.jsx";
import { motion } from "framer-motion";
import { animated as a, useSpring, useTransition } from "react-spring";
import { BrowserRouter, Switch, Route, useRouteMatch } from "react-router-dom";
import { SearchContext } from "./../../context/SearchContext";
import "./content.scss";

const Content = () => {
  const API_URL = "http://localhost:8080/contributions";
  const [searchInput, setSearchInput] = useContext(SearchContext);
  const [contributions, setContributions] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [heading, setHeading] = useState("recents");
  const [contributionSearchResults, setContributionSearchResults] = useState(
    []
  );

  useEffect(() => {
    contributions.map((x) => {
      if (x.Heading.includes(searchInput)) {
        setContributionSearchResults((prevRes) => {
          return [...prevRes, x];
        });
      }
    });

    return () => {
      setContributionSearchResults([]);
    };
  }, [searchInput]);

  useEffect(() => {
    if (contributionSearchResults.length == 0 && searchInput != "") {
      setHeading("noresult");
    } else if (searchInput == "") {
      setHeading("recents");
    } else if (contributionSearchResults.length == 1) {
      setHeading("result");
    } else if (contributionSearchResults.length > 1) {
      setHeading("results");
    }
  }, [contributionSearchResults]);

  const springProps = useSpring({
    from: {
      opacity: 0,
      color: "gray",
      transform: "translate3d(100px, 0,0)",
    },
    to: {
      opacity: 1,
      color: "white",
      transform: "translate3d(0, 0,0)",
    },
  });

  const springHeadingTransition = useTransition(heading, null, {
    from: {
      opacity: 0,
      color: "gray",
      transform: "translate3d(100px, 0,0)",
    },
    enter: {
      opacity: 1,
      color: "white",
      transform: "translate3d(0, 0,0)",
    },
    leave: {
      opacity: 1,
      color: "white",
      transform: "translate3d(0, 0,0)",
    },
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setContributions(data);
    setLoaded(true);
  };

  let { path, url } = useRouteMatch();

  if (!isLoaded) {
    return (
      <motion.div
        className="ug-content"
        exit={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="ug-loading">Loading</div>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        className="ug-content"
        exit={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div
          style={{
            backgroundColor: "transparent",
            height: "100px",
            width: "100%",
          }}
        ></div>

        {heading == "recents" ? (
          <div className="ug-container-recents_heading">
            <p>recents</p>
          </div>
        ) : heading == "results" ? (
          <div className="ug-container-recents_heading">
            <p>results</p>
          </div>
        ) : heading == "result" ? (
          <div className="ug-container-recents_heading">
            <p>result</p>
          </div>
        ) : heading == "noresult" ? (
          <div className="ug-container-noresults_heading">
            <p>no results</p>
          </div>
        ) : (
          "error"
        )}

        {searchInput == ""
          ? contributions.map((x) => (
              <UgContainer
                key={x.ID}
                heading={x.Heading}
                description={x.Description}
              />
            ))
          : contributionSearchResults.length != 0
          ? contributionSearchResults.map((x) => (
              <UgContainer
                key={x.ID}
                heading={x.Heading}
                description={x.Description}
              />
            ))
          : ""}

        {/* <Switch> */}
          {/* <Route exact path={path}></Route> */}
          {/* <Route path={`${path}/Head`}> */}
            {/* <Head /> */}
          {/* </Route> */}
        {/* </Switch> */}
      </motion.div>
    );
  }
};

export default Content;
import React, { useState, useEffect, useContext, useRef } from "react";
import Head from "./ContentSwitch/ContentSwitch.jsx";
import Container from "./Container/Container.jsx";
import { motion } from "framer-motion";
import { animated as a, useSpring, useTransition } from "react-spring";
import { BrowserRouter, Switch, Route, useRouteMatch, useLocation } from "react-router-dom";
import { SearchContext } from "./../../context/SearchContext";
import SearchIcon from "./../../assets/Searchicon.png";
import "./content.scss";

const Content = () => {
  const API_URL = "http://10.0.0.11:8080/contributions";
  // const [searchInput, setSearchInput] = useContext(SearchContext);
  const [contributions, setContributions] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [heading, setHeading] = useState("recents");
  const [contributionSearchResults, setContributionSearchResults] = useState([]);
  const [isActive, setActive] = useState(false);
  const [searchInput, setSearchInput] = useContext(SearchContext);
  const searchRef = useRef();
  const location = useLocation();
  const searchSpring = useSpring(
    {
      width: isActive ? "200px" : "140px"
    }
  )

  useEffect(() => {
    contributions.map((x) => {
      if (x.Name.includes(searchInput)) {
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
    console.log(data)
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

        <div className="search-bar">
          {heading == "recents" ? (
            <div className="ug-container-recents_heading">
              recents
            </div>
          ) : heading == "results" ? (
            <div className="ug-container-recents_heading">
              results
            </div>
          ) : heading == "result" ? (
            <div className="ug-container-recents_heading">
              result
            </div>
          ) : heading == "noresult" ? (
            // <div className="ug-container-noresults_heading">
            //   <p>no results</p>
            // </div>
            <div className="ug-container-recents_heading">
              no results
            </div>
          ) : (
                    "error"
                  )}
          <a.div className="ug-btn-search" style={searchSpring}>
            <input
              ref={searchRef}
              onFocus={() => {
                setActive(true);
              }}
              onBlur={() => {
                setActive(false);
              }}
              onChange={(e) => setSearchInput(e.target.value)}
              className="ug-btn-search-input"
              type="text"
              value={searchInput}
              placeholder="search"
            />
            <div
              onClick={() => {
                searchRef.current.focus();
              }}
              className="ug-btn-search_icon"
            >
              <img src={SearchIcon} alt="" height="20px" width="20px" />
            </div>
          </a.div>
        </div>
        
        {searchInput == ""
          ? contributions.map((x) => (
            <Container
              key={x.ID}
              Name={x.Name}
              Route={x.Route}
              Description={x.Description}
            />
          ))
          : contributionSearchResults.length != 0
            ? contributionSearchResults.map((x) => (
              <Container
                key={x.ID}
                Name={x.Name}
                Route={x.Route}
                Description={x.Description}
              />
            ))
            : ""}
      </motion.div>
    );
  }
};

export default Content;
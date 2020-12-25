import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useContext,
} from "react";

import Container from "./Container/container.jsx";
import UgContainer from "./Container/container.jsx";
import { AnimatePresence, motion } from "framer-motion";
import useWindowPosition from "./../../utils/useWindowPosition.jsx";
import { animated, useSpring, Spring, useTransition } from "react-spring";

import { SearchContext } from "./../../context/SearchContext";

import "./content.scss";

const Content = () => {
  //variabales
  const API_URL = "http://localhost:8080/contributions";

  //hooks
  // const propsss = useSpring({"height": `${scrollPosition+100}px`, from: {"height": `${scrollPosition}px`}})
  const [searchInput, setSearchInput] = useContext(SearchContext);
  const [contributions, setContributions] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [heading, setHeading] = useState("recents");
  const [contributionSearchResults, setContributionSearchResults] = useState(
    []
  );

  useEffect(() => {
    contributions.map((x) => {
      //seeing if it can be added
      if (x.Heading.includes(searchInput)) {
        //adding to the searchResults
        setContributionSearchResults((prevRes) => [...prevRes, x]);
      }
    });

    if (contributionSearchResults.length == 0 && searchInput != "") {
      setHeading("no resutls");

    } else if ( searchInput == ""){
      setHeading("Recents")
    }
    else if (contributionSearchResults.length == 1) {
      setHeading("Result");
    } else if (contributionSearchResults.length > 1) {
      setHeading("Results");
    } 

    return () => {
      setContributionSearchResults([]);
    };
  }, [searchInput]);

  // const springProps = useSpring({
  //   from: {
  //     opacity: 0,
  //     color: "gray",
  //     transform: "translate3d(100px, 0,0)",
  //   },
  //   to: {
  //     opacity: 1,
  //     color: "white",
  //     transform: "translate3d(0, 0,0)",
  //   }
  // });

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
    }
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
    leave:{
      opacity: 1,
      color: "white",
      transform: "translate3d(0, 0,0)",
    }
  })

  const [numberOfResults, setNumberOfResults] = useState(0);

  const increaseNumberOfResults = () => {
    setNumberOfResults(() => {
      numberOfResults + 1;
    });
  };

  // const ugHeightRef = useRef(0);

  // useLayoutEffect(() => {
  //   function updatePosition() {
  //     setPosition(window.pageYOffset);
  //   }
  //   window.addEventListener("scroll", updatePosition);
  //   updatePosition();
  //   return () => window.removeEventListener("scroll", updatePosition);
  // }, []);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setContributions(data);
    setLoaded(true);
  };

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
        {/* <div className="ug-background_shader"></div> */}

        <div className="ug-container-box">
          <div
            style={{
              backgroundColor: "transparent",
              height: "100px",
              width: "100%",
            }}
          ></div>

          {/* {searchInput == "" ? (
            <animated.div
              style={springProps}
              className="ug-container-recents_heading"
            >
              recents
            </animated.div>
          ) : contributionSearchResults.length == 0 ? (
            <animated.div
              style={springProps}
              className="ug-container-recents_heading"
            >
              no Result
            </animated.div>
          ) : contributionSearchResults.length > 1 ? (
            <animated.div
              style={springProps}
              className="ug-container-recents_heading"
            >
              Results
            </animated.div>
          ) : (
            <animated.div
              style={springProps}
              className="ug-container-recents_heading"
            >
              {heading}
            </animated.div>
          )} */}
          <animated.div
            style={springProps}
            className="ug-container-recents_heading">
            {heading}
          </animated.div>

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
        </div>
        <div className="ug-menu_shadow" />
      </motion.div>
    );
  }
};

// class Content extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       contributions: [],
//       isLoaded: false,
//     };
//     // this.state = contributions
//   }

//   componentDidMount() {

//     fetch("http://localhost:8080/contributions", {
//       method: "get",
//       headers: {
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Methods": "*",
//         // "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT, DELETE",
//         "Access-Control-Allow-Headers": "*",
//         // "Access-Control-Allow-Headers": "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization"
//         // "Access-Control-Allow-Headers"
//       },
//     })
//       .then((response) => response.json())
//       .then((json) => {
//         this.setState({
//           isLoaded: true,
//           contributions: json,
//         }).catch(() => {
//           console.log("error occurred");
//         });
//       });
//   }

//   render() {
//     console.log(window.scrollY);
//     var { isLoaded, contributions } = this.state;
//     if (!isLoaded) {
//       return (
//         <motion.div
//           className="ug-content"
//           exit={{ opacity: 1 }}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//         >
//           <div className="ug-loading">Loading</div>
//         </motion.div>
//       );
//     } else {
//       return (
//         <motion.div
//           className="ug-content"
//           exit={{ opacity: 1 }}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//         >
//           <div className="ug-background_shader"></div>

//           <div className="ug-container-box">
//           <div style={{"backgroundColor": "transparent", "height": "100px", "width": "100%"}}></div>
//             {contributions.map((x) => (
//               <UgContainer
//                 key={x.ID}
//                 heading={x.Heading}
//                 description={x.Description}
//               />
//             ))}
//           </div>

//           {/* <div className="ug-menu_shadow"/> */}
//         </motion.div>
//       );
//     }
//   }
// }

export default Content;

// fetch("http://localhost:8080/contributions")
//   .then(respone => response.text())
//   .then(contents => console.log(contents))
//   .catch(()=> console.log("cant access"))

// .then((json) => {
//   this.setState({
//     isLoaded: true,
//     contributions: json,
//   });
//   }
// );

// if (!isLoaded) {
//   return (
//     <div className="ug-content">
//       <div className="ug-background_shader"></div>
//       <div style={{ color: "green", position: "relative" }}>Loading...</div>
//     </div>
//   );
// } else {
//   return (

//     <div className="ug-content">
//       <div className="ug-background_shader"></div>
//       <div className="ug-container-box">
//         {contributions.map((x) => (
//           <UgContainer heading={x.title} description={x.id} />
//         ))}
//       </div>
//     </div>
//   );
// }

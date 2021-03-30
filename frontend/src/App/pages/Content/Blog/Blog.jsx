import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import "./Blog.scss";
import { Link,useHistory } from "react-router-dom";
import FullLogoBy from "./../../../assets/UNGAR-by.svg";
import { useParams } from "react-router-dom";
import { animated as a, useSpring } from "react-spring";
import useSubscription from "./../../../utils/useSubscription.jsx";
import axios from "axios";

const Blog = (props) => {
  const {
    handleSubscriptionChange,
    handleSubscriptionSubmit,
    subscriptionValues,
    subStatus,
    setSubStatus
  } = useSubscription();

  const API_URL = "http://localhost:8080/contributions";
  const history = useHistory();
  const [blur, setBlur] = useState(0);
  const [blog, setBlog] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [showSubscribeField, setShowSubscribeField] = useState(false);

  let { blogID } = useParams();

  const blurSpring = useSpring({
    filter: blur == null ? "blur(0px)" : `blur(${blur}px)`,
    config: { duration: 20 },
  });

  const fadeInFromTop = useSpring({
    marginTop: showSubscribeField ? "0px" : "-500px",
  });

  // useEffect(() => {
    
  //   // console.log("blogID route: " + blogRoute)
  //   // const response = await fetch(blogRoute);
  //   // const data = await response.json();

  //   // await fetch(blogRoute)
  //   // .then((response) => response.json())
  //   // .then((data) => {
  //   //   console.log(data);
  //   // })
  //   // .catch((error) => {
  //   //   // setFetchingErrorStatus(true);
  //   //   throw error;
  //   // });
  //   // console.log(data);

 

  //   // data.forEach((element) => {
  //   //   console.log(element.Heading);
  //   //   console.log(blogID);
  //   //   if (element.Route == blogID) {
  //   //     console.log("true");
  //   //     setBlog(element);
  //   //     console.log(element.BlogHTML);
  //   //     console.log(element);
  //   //   }
  // }, []);


  useEffect(() => {
    var blogRoute = appendQueryParameter(API_URL,"key",blogID);
    const fetchData = async () => {
      const result = await fetch(blogRoute)
        .then(response=>response.json())
        .then(data=>{
          console.log("data bro:" + data)
          if(data==null){ 
            console.log("wasn't found")
            history.push("/notfound")
          }else{
            setBlog(data);
            setLoaded(true);
          }
        })
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (showSubscribeField) {
      setBlur(4);
    } else {
      setBlur(0);
    }
  }, [showSubscribeField]);

  // const loadData = async () => {
  //   const response = await fetch(API_URL);
  //   const data = await response.json();
  //   data.forEach((element) => {
  //     console.log(element.Heading);
  //     console.log(blogID);
  //     if (element.Route == blogID) {
  //       console.log("true");
  //       setBlog(element);
  //       console.log(element.BlogHTML);
  //       console.log(element);
  //     }
  //   });

  //   setLoaded(true);
  // };

  function createMarkup(htmlCode) {
    return { __html: htmlCode };
    // DOMPurify.sanitize(blog.blogHTML)
  }

  function appendQueryParameter(url, name, value) {
    if (url.length === 0) {
        return;
    }

    let rawURL = url;

    // URL with `?` at the end and without query parameters
    // leads to incorrect result.
    if (rawURL.charAt(rawURL.length - 1) === "?") {
        rawURL = rawURL.slice(0, rawURL.length - 1);
    }

    const parsedURL = new URL(rawURL);
    let parameters = parsedURL.search;

    parameters += (parameters.length === 0) ? "?" : "&";
    parameters = (parameters + name + "=" + value);

    return (parsedURL.origin + parsedURL.pathname + parameters);
  }

  return (
    <>
      {showSubscribeField ? (
        <a.div style={fadeInFromTop} className="subscribeField">
          <div className="subscribeBox">
            {subStatus == null ? (
              <form onSubmit={handleSubscriptionSubmit}>
                <div className="alert-form">
                  <div className="alert-heading">
                    <p>Enter your email address</p>
                  </div>
                  <div className="alert-inputs">
                    <input
                      onChange={handleSubscriptionChange}
                      value={subscriptionValues.email}
                      type="email"
                      name="email"
                      placeholder="email"
                      required
                    />
                  </div>
                  <div className="alert-buttons">
                    <button
                      className="alert-contact"
                      onClick={() => {
                        setShowSubscribeField(false);
                      }}
                    >
                      cancel
                    </button>
                    <input
                      type="submit"
                      className="alert-ok"
                      name="OK"
                      value="OK"
                    />
                  </div>
                </div>
              </form>
            ) : subStatus == "success" ? (
              <div className="response">
                <p>
                  successfully subscribed to the blog
                </p>
                <button
                  onClick={
                    ()=>{
                      setSubStatus(null)
                      setShowSubscribeField(false)
                    }
                  }
                >
                  OK
                </button>
              </div>
            ) : (
              <div className="response">
                <p>
                  error connecting to server
                </p>
                <button
                  onClick={
                    ()=>{
                      setSubStatus(null)
                    }
                  }
                  >
                  Try Again
                </button>
                </div>
            )}
          </div>
        </a.div>
      ) : null}

      <a.div style={blurSpring} className="Blog">
        {/* <div className="FullLogo">
        <Link to="/">
          <FullLogo width="300" height="200" className="Blog-Nav-FullLogo-svg" />
        </Link>
      </div> */}
        <div className="Blog-Nav">
          <div className="Hor">
            <div className="Blog-Nav-Back">
              <Link to="/content">more</Link>
            </div>
            {!loaded ? (
              <div className="Blog-Nav-Middle">loading...</div>
            ) : (
              <div className="Blog-Nav-Middle">{blog.Name}</div>
            )}
            <div
              className="Blog-Nav-Subscribe"
              onClick={() => {
                setShowSubscribeField(true);
                console.log("setted to true");
              }}
            >
              subscribe
            </div>
          </div>
          <div className="Blog-Divider"></div>
        </div>

        {!loaded ? (
          <div className="loading"> loading...</div>
        ) : (
          <div className="Blog-Content">
            {/* <div className="Blog-Content-Heading">heading</div> */}
            <div className="Blog-Content-Text">
              {/* blogID: {blogID} <br />
            blog: {blog.Heading} <br />
            hello HTML:{" "}
            <div dangerouslySetInnerHTML={createMarkup(htmlStringTest)}></div>
            <br />
            {console.log(blog.blogHTML)}
            blog HTML:{" "} */}
              <div dangerouslySetInnerHTML={createMarkup(blog.Html)}></div>
              {/* <br />
            blog description: {blog.Description} <br /> */}
            </div>
          </div>
        )}
        <div className="logo">
          <Link to="/">
            <FullLogoBy
              width="250"
              height="150"
              className="Blog-Nav-FullLogo-svg"
            />
          </Link>
        </div>
      </a.div>
    </>
  );
};

export default Blog;

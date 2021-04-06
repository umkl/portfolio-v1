import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import "./Blog.scss";
import { Link, useHistory } from "react-router-dom";
import FullLogoBy from "./../../../assets/UNGAR-by.svg";
import { useParams } from "react-router-dom";
import { animated as a, useSpring } from "react-spring";
import useSubscription from "./../../../utils/useSubscription.jsx";
import axios from "axios";
import { Helmet } from "react-helmet";

const Blog = (props) => {
  const {
    handleSubscriptionChange,
    handleSubscriptionSubmit,
    subscriptionValues,
    subStatus,
    setSubStatus,
  } = useSubscription();

  const API_URL = "https://api.ungarmichael.com/contributions";
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

  useEffect(() => {
    var blogRoute = appendQueryParameter(API_URL, "key", blogID);
    console.log("blogRoute:" + blogRoute);
    const fetchData = async () => {
      const result = await fetch(blogRoute)
        .then((response) => response.json())
        .then((data) => {
          if (data == null) {
            history.push("/notfound");
          } else {
            setBlog(data);
            setLoaded(true);
          }
        });
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

    parameters += parameters.length === 0 ? "?" : "&";
    parameters = parameters + name + "=" + value;

    return parsedURL.origin + parsedURL.pathname + parameters;
  }

  return (
    <>
      <Helmet>
        <title>ungarmichael | pretest</title>
      </Helmet>
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
                <p>successfully subscribed to the blog</p>
                <button
                  onClick={() => {
                    setSubStatus(null);
                    setShowSubscribeField(false);
                  }}
                >
                  OK
                </button>
              </div>
            ) : (
              <div className="response">
                <p>error connecting to server</p>
                <button
                  onClick={() => {
                    setSubStatus(null);
                  }}
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        </a.div>
      ) : null}

      <a.div style={blurSpring} className="Blog">
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
            <div className="Blog-Content-Text">
              <div dangerouslySetInnerHTML={createMarkup(blog.Html)}></div>
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

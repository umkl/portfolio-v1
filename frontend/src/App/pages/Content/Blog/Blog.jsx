import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import "./Blog.scss";
import { Link } from "react-router-dom";
import FullLogo from "./../../../assets/UNGAR-FULL.svg";
import { useParams } from "react-router-dom";

const Blog = (props) => {
  const API_URL = "http://localhost:8080/contributions";

  const [blog, setBlog] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const htmlStringTest = "<h1>I'm a string with HTML!</h1>";

  let { blogID } = useParams();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    data.forEach((element) => {
      console.log(element.Heading);
      console.log(blogID);
      if (element.Heading == blogID) {
        console.log("true");
        setBlog(element);
        console.log(element.BlogHTML);
        console.log(element);
      }
    });

    setLoaded(true);
  };

  function createMarkup(htmlCode) {
    return { __html: htmlCode };
    // DOMPurify.sanitize(blog.blogHTML)
  }

  return (
    <div className="Blog">
      <div className="Blog-Nav">
        <div className="Blog-Nav-Back">
          <Link to="/content">more</Link>
        </div>
        {!loaded ? (
          <div className="Blog-Nav-Middle">loading...</div>
        ) : (
          <div className="Blog-Nav-Middle">{blog.Heading}</div>
        )}

        <div className="Blog-Nav-FullLogo">
          <Link to="/">
            <FullLogo
              width="100"
              height="60"
              className="Blog-Nav-FullLogo-svg"
            />
          </Link>
        </div>
      </div>
      <div className="Blog-Divider"></div>
      {!loaded ? (
        <div style={{ color: "white" }}>loading …</div>
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
            <div dangerouslySetInnerHTML={createMarkup(blog.BlogHTML)}></div>
            {/* <br />
            blog description: {blog.Description} <br /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;

import React from "react";
import "./Blog.scss";
import { Link } from "react-router-dom";
import FullLogo from "./../../../assets/UNGAR-FULL.svg";
import {useParams} from "react-router-dom";


const Blog = (props) => {
  let {heading} = useParams();

  return (
    <div className="Blog">
      <div className="Blog-Nav">
        <div className="Blog-Nav-Back">
          <Link to="/content">more</Link>
        </div>
        <div className="Blog-Nav-Middle">

        </div>
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
      <div className="Blog-Content">
        <div className="Blog-Content-Heading">{heading}</div>
        <div className="Blog-Content-Text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit
          esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
          at vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          Lorem ipsum dolor sit amet,
        </div>
      </div>
    </div>
  );
};

export default Blog;

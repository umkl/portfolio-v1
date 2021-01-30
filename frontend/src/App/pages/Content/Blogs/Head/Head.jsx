import React from "react";
import "./Head.scss";
import { Link } from "react-router-dom";
import FullLogo from "./../../../../assets/UNGAR-FULL.svg";

const Head = () => {
  return (
    <div className="Head">
      <div className="Head-Content">
        <div className="Head-Content-Heading">Heading</div>
        <div className="Head-Content-Text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,</div>
      </div>
      <div className="Head-Nav">
          <div className="Head-Nav-Back"><Link to="/content">go back</Link></div>
          <div className="Head-Nav-FullLogo">
            <FullLogo width="100" height="60" className="Head-Nav-FullLogo-svg" />
          </div>
      </div>
    </div>
  );
};

export default Head;

import React from 'react';
import "./Head.scss";
import {Link} from "react-router-dom";

 const Head = () => {
    return (
        <div className="Head">
            <Link to="/content">go back</Link>
        </div>
    )
}

export default Head;

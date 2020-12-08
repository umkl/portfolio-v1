import React from 'react'
import './project.scss'
import {useSpring, animated as a} from "react-spring";

const UgProject = (props) => {
    
    const showSpring = useSpring({
        to: {opacity: 1, backgroundColor: "green", },
        from: {opacity: 0.5, backgroundColor: "blue"}
    })

    return (
        <div style={props.active ? showSpring : null} className="ug-project">
            {props.Title} <br/>
            {props.Description}
        </div>
    )
}

export default UgProject;

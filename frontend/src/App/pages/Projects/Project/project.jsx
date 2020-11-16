import React from 'react'
import './project.scss'

const UgProject = (props) => {
    return (
        <div className="ug-project">
            {props.Title} <br/>
            {props.Description}
            {/* heading: {{props.Description}} */}
        </div>
    )
}

export default UgProject;

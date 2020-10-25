import React, { Component } from 'react'
import UgNav from './../nav/nav.jsx';
import UgBtn from './../btn/btn.jsx'
import './bar.scss'

export default class UgBar extends Component {
    render() {
        return (
            <div id="ug-bar">
                <UgNav/>
                <UgBtn/>
            </div>
        )
    }
}


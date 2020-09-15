import React, { Component } from 'react'
import UgNav from './../nav/nav';
import './bar.scss'

export default class UgBar extends Component {
    render() {
        return (
            <div id="ug-bar">
                <UgNav/>
            </div>
        )
    }
}


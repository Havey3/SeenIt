import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./seenit.css"

export default class SeenIt extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="seenIt-Container">
                <p>Hello</p>
                <Link className="nav-link" to="/SeenIt-All">
                            SeenIt-All
                    </Link>
                </div>
            </React.Fragment>
        )
    }
}
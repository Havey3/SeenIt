import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <ul class="nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            SeenIt
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/SeeIt All">
                            SeenIt-All
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/SeeIt All">
                            SeeIt
                    </Link>
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}
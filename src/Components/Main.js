import React, { Component } from "react"
import NavBar from "./NavBar/Nav"
// import ApplicationViews from "./ApplicationViews"
import "./Main.css"
import "bootstrap/dist/css/bootstrap.min.css"

export default class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
            </React.Fragment>
        )
    }
}
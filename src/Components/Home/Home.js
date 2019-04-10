import React, { Component } from "react";
import camera from "./seenit_camera_black_01.png"
import reel from "./seenit_reel_black_04.png"
import "./home.css"
export default class Home extends Component {
    render(){
        return(
            // <img className="logo-img" src={camera} alt="hi"></img>
            <img className="logo-img" src={reel} alt="hi"></img>
        )
    }
}
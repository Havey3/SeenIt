import React, { Component } from "react";
import img from "./seenit_camera_black_01.png"
import "./home.css"
export default class Home extends Component {
    render(){
        return(
            <img className="logo-img" src={img} alt="hi"></img>
        )
    }
}
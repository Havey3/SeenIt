import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import Main from './Components/Main'
import TestComponent from "./testComponent";
import './index.css'

ReactDOM.render(
    <Router>
        <Main />
    </Router>
    , document.getElementById('root'))
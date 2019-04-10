import React, { Component } from "react"
import NavBar from "./NavBar/Nav"
import auth0Client from "./Auth/Auth"
import {withRouter} from 'react-router-dom';
import ApplicationViews from "./ApplicationViews"
import ScrollToTop from "./ScrollToTop"
import "./Main.css"
import "bootstrap/dist/css/bootstrap.min.css"
// import 'materialize-css/dist/css/materialize.min.css';

class Main extends Component {
    async componentDidMount() {

        if (this.props.location.pathname === '/callback') return;
        try {
            await auth0Client.silentAuth();
            this.forceUpdate();
        } catch (err) {
            if (err.error !== 'login_required') console.log(err.error);
        }
    }
    render() {
        return (
            <React.Fragment>
            <div className="container-div">
                <NavBar />
                <ScrollToTop />
                <ApplicationViews />
                </div>
            </React.Fragment>
        )
    }
}
export default withRouter(Main);
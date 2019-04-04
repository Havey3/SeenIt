import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import "./Nav.css"
import { Link, withRouter } from "react-router-dom";
import auth0Client from "../Auth/Auth"

class NavBar extends Component {
    signOut = () => {
        auth0Client.signOut();
        sessionStorage.clear()
        this.props.history.replace("/");
    };
    render() {
        return (
            <React.Fragment>
                {!auth0Client.isAuthenticated() ? (
                    <nav className="navbar">
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <Link className="login-attempt" onClick={auth0Client.signIn}>
                                    Sign In
</Link></li></ul></nav>
                ) : (
                        <nav className="navbar">
                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/SeeIt">
                                        SeeIt
                    </Link>

                                </li>
                                <li className="nav-item">
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/seenIt">
                                        SeenIt
                    </Link>
                                </li>
                                <li className="nav-item">
                                    {!auth0Client.isAuthenticated() ? (
                                        <Link className="nav-link" onClick={auth0Client.signIn}>
                                            Sign In
              </Link>
                                    ) : (

                                            <Link className="nav-link"
                                                onClick={() => {
                                                    this.signOut();
                                                }}
                                            >
                                                Sign Out
                  </Link>


                                        )}

                                </li>
                            </ul>
                        </nav>

                    )}

            </React.Fragment>
        );
    }
}

export default withRouter(NavBar);

// If you want to display user name
// <label className="mr-2 text-blue">
// {auth0Client.getProfile().name}
// </label>

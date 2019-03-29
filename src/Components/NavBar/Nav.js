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
    // render() {
    //     return (
    //         <React.Fragment>
    //             <ul className="nav">
    //                 <li className="nav-item">
    //                     <Link className="nav-link" to="/">
    //                         SeenIt
    //                 </Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link className="nav-link" to="/SeenIt-All">
    //                         SeenIt-All
    //                 </Link>
    //                 </li>
    //                 <li className="nav-item">
    //                     <Link className="nav-link" to="/SeeIt">
    //                         SeeIt
    //                 </Link>
    //                 </li>
    //             </ul>
    //         </React.Fragment>
    //     )
    // }
    render() {
        return (
            <nav className="navbar">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            SeenIt
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/SeenIt-All">
                            SeenIt-All
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/SeeIt">
                            SeeIt
                    </Link>
                    </li>
                </ul>
                {!auth0Client.isAuthenticated() ? (
                    <button className="btn btn-success" onClick={auth0Client.signIn}>
                        Sign In
              </button>
                ) : (
                        <React.Fragment>
                            <div>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => {
                                        this.signOut();
                                    }}
                                >
                                    Sign Out
                  </button>
                            </div>
                        </React.Fragment>
                    )}
            </nav>
        );
    }
}

export default withRouter(NavBar);

// If you want to display user name
// <label className="mr-2 text-blue">
// {auth0Client.getProfile().name}
// </label>

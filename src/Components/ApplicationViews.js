import { Route } from "react-router-dom"
import React, { Component } from "react"
import Auth0Client from "./Auth/Auth"
import Callback from "./Auth/Callback"
import SeenIt from "./seenIt/seenit"
import SeeIt from "./seeIt/seeit"
import SeenItAll from "./seenIt-all/seenit-all"

export default class ApplicationViews extends Component {
    state = {
        seenIt: [],
        seeIt: [],
        seenItAll: [],
        users: []
    }
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    render() {
        return (
            <div className="container-div">
                <Route exact path="/callback" component={Callback} />

                <Route exact path="/" render={(props) => {
                    if (Auth0Client.isAuthenticated()) {
                        return <SeenIt SeenIt={this.state.SeenIt} />
                    } else {
                        Auth0Client.signIn();
                        return null;
                    }
                }} />

                <Route
                    exact
                    path="/SeeIt"
                    render={props => {
                        if (Auth0Client.isAuthenticated()) {
                            return <SeeIt {...props} seeIt={this.state.SeeIt} />;
                        } else {
                            Auth0Client.signIn();
                            return null;
                        }
                    }}
                />
                <Route
                    exact
                    path="/SeenIt-All"
                    render={props => {
                        if (Auth0Client.isAuthenticated()) {
                            return <SeenItAll {...props} seenItAll={this.state.seenItAll} />;
                        } else {
                            Auth0Client.signIn();
                            return null;
                        }
                    }}
                />
            </div>
        )
    }

}
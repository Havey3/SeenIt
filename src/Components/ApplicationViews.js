import { Route } from "react-router-dom"
import React, { Component } from "react"
import Auth0Client from "./Auth/Auth"
import Callback from "./Auth/Callback"
import SeenIt from "./seenIt/seenit"
import SeenItAll from "./seenIt-all/seenit-all"
import apiManager from "../Modules/apiManager"
import SeeIt from "./seeIt/seeit"
import SeeItForm from "./seeIt/seeitbuilder"
import SeeItDetails from "./seeIt/details"

export default class ApplicationViews extends Component {
    state = {
        movies: []
    }

    addMovie = (movieObject) => {
        return apiManager.postMovie(movieObject)
            .then(() => apiManager.getAll())
            .then((movies) =>
            this.setState({ movies: movies }));
    }

    componentDidMount() {
        const newState = {};
        apiManager.getAll().then((movies) => {
            newState.movies = movies;
            this.setState(newState)
        })
    }



    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    render() {
        return (
            <div className="container-div">
                <Route exact path="/callback" component={Callback} />

                <Route exact path="/" render={(props) => {
                    if (Auth0Client.isAuthenticated()) {
                        return <SeenIt {...props} movies={this.state.movies} />
                    } else {
                        Auth0Client.signIn();
                        return null;
                    }
                }} />

                <Route
                    exact
                    path="/seeIt"
                    render={(props) => {
                        if (Auth0Client.isAuthenticated()) {
                            return (
                                <SeeIt
                                    {...props}
                                    addMovie={this.addMovie}
                                    movies={this.state.movies}
                                />);
                        } else {
                            Auth0Client.signIn();
                            return null;
                        }
                    }}
                />
                 <Route
                    path="/movies/:movieId(\d+)"
                    render={(props) => {
                        if (Auth0Client.isAuthenticated()) {
                            return (
                                <SeeItDetails
                                    {...props}
                                    movies={this.state.movies}
                                />);
                        } else {
                            Auth0Client.signIn();
                            return null;
                        }
                    }}
                />
                <Route
                    exact
                    path="/seeIt/new"
                    render={(props) => {
                        return <SeeItForm {...props} addMovie={this.addMovie} movies={this.state.movies} />;
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
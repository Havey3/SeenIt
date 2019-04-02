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
import MovieEditForm from "./seeIt/MovieEditForm"
import TestComponent from "../testComponent";
import Test from "../testComponent";

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
    deleteMovie = id => {
        return apiManager.deleteMovie(id).then(movies =>
            this.setState({
                movies: movies
            }))
    }
    editMovie = editObject => {
        return apiManager.editMovie(editObject)
            .then(() => apiManager.getAll())
            .then(movies => {
                this.setState({
                    movies: movies
                })
            })
    }
    seenIt = (movieId, movieObject) => {
        return apiManager.changeMovie(movieObject, movieId)
        .then(() => apiManager.getAll())
        .then((movies) => {
            this.setState({
                movies: movies
            })
        } )
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
                        return <TestComponent />
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
                                    seenIt={this.seenIt}
                                />);
                        } else {
                            Auth0Client.signIn();
                            return null;
                        }
                    }}
                />
                <Route
                    exact
                    path="/movies/:movieId(\d+)"
                    render={(props) => {
                        if (Auth0Client.isAuthenticated()) {
                            return (
                                <SeeItDetails
                                    {...props}
                                    movies={this.state.movies}
                                    deleteMovie={this.deleteMovie}
                                />);
                        } else {
                            Auth0Client.signIn();
                            return null;
                        }
                    }}
                />
                <Route
                    path="/movies/:movieId(\d+)/edit"
                    render={props => {
                        return (
                            <MovieEditForm
                                {...props}
                                movies={this.state.movies}
                                editMovie={this.editMovie}
                            />
                        );
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
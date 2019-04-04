import React, { Component } from 'react'

export default class SeeItDetails extends Component {
    render () {
        const movie = this.props.movies.find(a=>a.id === parseInt(this.props.match.params.movieId)) || {}
        // console.log(movie)

        return (
            <React.Fragment>
                <div className="seeIt-Container">
                <section className="seeIt">

                        <div key = {movie.id} className="card">
                        <img src = {movie.image} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                          <p className="card-text">{movie.title}</p>
                          <p className="card-text">{movie.director}</p>
                          <div className="detial-buttons">
                          <button href="#"
                            onClick={() => this.props.deleteMovie(movie.id)
                                            .then(() => this.props.history.push("/seeit"))}
                            className="card-link">Delete</button>
                            <button href="#"
                            onClick={() => {
                                            this.props.history.push(`/movies/${movie.id}/edit`
                                            )
                                            }}
                            >Edit</button>
                            </div>
                        </div>
                      </div>
                </section>
                </div>
            </React.Fragment>
        )
    }
}
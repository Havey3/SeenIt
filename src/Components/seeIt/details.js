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
                          <p className="card-text">{movie.notes}</p>
                          <p className="card-text">{movie.rank}</p>
                          <a href="#"
                            onClick={() => this.props.deleteMovie(movie.id)
                                            .then(() => this.props.history.push("/seeit"))}
                            className="card-link">Delete</a>
                        </div>
                      </div>
                </section>
                </div>
            </React.Fragment>
        )
    }
}
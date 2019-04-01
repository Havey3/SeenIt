import React, { Component } from 'react'

export default class SeeItDetails extends Component {
    render () {
        const movie = this.props.movies.find(movie=>movie.id === parseInt(this.props.match.params.movieId)) || {}
        console.log(movie)

        return (
            <React.Fragment>
                <div className="seeIt-Container">
                <section className="seeIt">
                    {this.props.movies.map(movie => (
                        <div key = {movie.id} className="card">
                        <img src = {movie.image} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                          <p className="card-text">{movie.title}</p>
                          <p className="card-text">{movie.director}</p>
                          <p className="card-text">{movie.notes}</p>
                          <p className="card-text">{movie.rank}</p>
                        </div>
                      </div>
                    ))}
                </section>
                </div>
            </React.Fragment>
        )
    }
}
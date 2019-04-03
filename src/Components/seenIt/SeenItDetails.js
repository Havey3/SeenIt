import React, { Component } from 'react'
export default class SeenItDetails extends Component {
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
                          <div className="detial-buttons">
                            <button href="#"
                            onClick={() => {
                                            this.props.history.push(`/seenIt/${movie.id}/edit`
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
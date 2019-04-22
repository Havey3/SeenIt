import React, { Component } from 'react'

export default class SeeItDetails extends Component {
    render() {
        const movie = this.props.movies.find(a => a.id === parseInt(this.props.match.params.movieId)) || {}
        // console.log(movie)

        return (
            <React.Fragment>
                {/* <div className="seeIt-Container">
                <section className="seeIt">

                        <div key = {movie.id} className="card">
                        <img src = {movie.image} className="card-img-top" alt="..."></img>
                        <div className="seeit-details">
                          <p className="card-text">{movie.title}</p>
                          <p className="card-text">{movie.director}</p>
                          <div className="detial-buttons">
                          <button href="#"
                            onClick={() => this.props.deleteMovie(movie.id)
                                            .then(() => this.props.history.push("/seeit"))}
                            className="card-link myButton">Delete</button>
                            <button href="#"
                            onClick={() => {
                                            this.props.history.push(`/movies/${movie.id}/edit`
                                            )
                                            }}
                                            className="card-link myButton"
                            >Edit</button>
                            </div>
                        </div>
                      </div>
                </section>
                </div> */}
                <div className="seeIt-change-container">
                    <div key={movie.id} className="card-change">
                        <img src={movie.image} className="image-change" alt="..."></img>
                    </div>
                    <div className="seeit-details-change">
                    <h1 className="h1-attempt">Movie Title</h1>
                        <p className="card-text-attempt">{movie.title}</p><br></br>
                        <h1 className="h1-attempt">Movie Director</h1>
                        <p className="card-text-attempt">{movie.director}</p><br></br>
                        <div className="detial-buttons">
                          <button href="#"
                            onClick={() => this.props.deleteMovie(movie.id)
                                            .then(() => this.props.history.push("/seeit"))}
                            className="card-link myButton">Delete</button>
                            <button href="#"
                            onClick={() => {
                                            this.props.history.push(`/movies/${movie.id}/edit`
                                            )
                                            }}
                                            className="card-link myButton"
                            >Edit</button>
                            </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
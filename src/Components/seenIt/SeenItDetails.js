import React, { Component } from 'react'
export default class SeenItDetails extends Component {
    render() {
        const movie = this.props.movies.find(a => a.id === parseInt(this.props.match.params.movieId)) || {}
        // console.log(movie)

        return (
            <React.Fragment>
                <div className="seeIt-change-container">
                    <div key={movie.id} className="card-change">
                        <img src={movie.image} className="image-change" alt="..."></img>
                    </div>
                    <div className="seeit-details-change">
                    <h1 className="h1-attempt">Movie Title</h1>
                        <p className="card-text-attempt">{movie.title}</p><br></br>
                        <h1 className="h1-attempt">Movie Director</h1>
                        <p className="card-text-attempt">{movie.director}</p><br></br>
                        <h1 className="h1-attempt">Movie Rank</h1>
                        <p className="card-text-attempt">{movie.rank}/5</p><br></br>
                        <h1 className="h1-attempt">Movie Notes</h1>
                        <p className="card-notes">{movie.notes}</p><br></br>
                        <div className="detial-buttons">
                            <button href="#"
                                onClick={() => {
                                    this.props.history.push(`/seenIt/${movie.id}/edit`
                                    )
                                }}
                                className="myButton"
                            >Edit</button>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}
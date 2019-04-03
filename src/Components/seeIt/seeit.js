import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./seeit.css"
export default class SeeIt extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="seeIt-Container">
                    <i className="fas fa-plus-circle"
                        onClick={() => {
                            this.props.history.push("/seeit/new");
                        }}></i>


                    <section className="seeIt">
                        {this.props.movies.map(movie => {
                            if (movie.seenIt === false && movie.userId === sessionStorage.getItem('credentials')) {
                                return <div key={movie.id} className="card">
                                    <img src={movie.image} className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <p className="card-text">{movie.title}</p>
                                        <p className="card-text">{movie.director}</p>
                                        <div className="seenit-btn-attempt">

                                            {/* <button
                                                type="submit"
                                                onClick={() => this.props.seenIt({ seenIt: true }, movie.id)}
                                                className="btn-small btn-attempt"
                                            >
                                                Watched?

          </button> */}
                                            {<Link className="details-link" to={`/moives/${movie.id}/rank`} onClick={() => this.props.seenIt({ seenIt: true }, movie.id)}
                                            >SeenIt?</Link>}
                                            <Link className="details-link link-attempt" to={`/movies/${movie.id}`}>Details</Link>
                                        </div>
                                    </div>
                                </div>
                            }
                        })}
                    </section>
                </div>
            </React.Fragment>
        )
    }
}

// onClick={() => this.props.seenIt({ seenIt: true }, movie.id)}
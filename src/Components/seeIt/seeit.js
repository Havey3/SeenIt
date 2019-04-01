import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./seeit.css"
export default class SeeIt extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="seeIt-Container">
                    <button type="button" className="size1button"
                        onClick={() => {
                            this.props.history.push("/seeit/new");
                        }}>Add Movie</button>

                <section className="seeIt">
                    {this.props.movies.map(movie => (
                        <div className="card">
                        <img src = {movie.image} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                          <p className="card-text">{movie.title}</p>
                          <p className="card-text">{movie.director}</p>
                          <Link className="nav-link" to={`/movies/${movie.id}`}>Details</Link>
                        </div>
                      </div>


                    ))}
                </section>
                </div>
            </React.Fragment>
        )
    }
}
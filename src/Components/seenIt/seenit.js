import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./seenit.css"
export default class SeenIt extends Component {
    render() {
        return (
            <React.Fragment>
                    <section className="seeIt">
                        {this.props.movies.map(movie => {
                            if (movie.seenIt === true && movie.userId === sessionStorage.getItem('credentials')) {
                                return <div key={movie.id} className="card">
                                    <img src={movie.image} className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <p className="card-text">{movie.title}</p>
                                        <p className="card-text">{movie.director}</p>
                                        <Link className="details-link" to={`/seenitdetails/${movie.id}`}>Details</Link>
                                    </div>
                                </div>
                            }


                        })}
                    </section>
            </React.Fragment>
        )
    }
}
import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./seeit.css"
import reel from "./seenit_reel_black_04.png"
export default class SeeIt extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="seeIt-Container dumb-margins">
                    <div className="logo-attempt2">
                        {/* <i className="fas fa-plus-circle"
                        onClick={() => {
                            this.props.history.push("/seeit/new");
                        }}></i> */}
                        <img className="logo-img" src={reel} alt="hi" onClick={() => {
                            this.props.history.push("/seeit/new");
                        }}></img>
                    </div>



                    <section className="seeIt">
                        {this.props.movies.map(movie => {
                            if (movie.seenIt === false && movie.userId === sessionStorage.getItem('credentials')) {
                                return <div key={movie.id} className="card">
                                    <img src={movie.image} className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <p className="card-text">{movie.title}</p>
                                        <div className="seenit-btn-attempt">
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
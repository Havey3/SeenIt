import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./seenit.css"
export default class SeenItAll extends Component {
    render() {
        const movieArray = this.props.movies.sort((a, b) => b.rank - a.rank).slice(0, 10)

        return (
            <React.Fragment>
                <h1 className="seenit-header">Top 10</h1>
                <section className="seeIt">
                    {movieArray.map(movie => {
                        console.log(movie.length)
                        if (movie.seenIt === true && movie.userId === sessionStorage.getItem('credentials')) {
                            return (
                                <div>
                                    <div key={movie.id} className="card">
                                        <img src={movie.image} className="card-img-top" alt="..."></img>
                                        <div className="card-body">
                                            <p className="card-text">{movie.title}</p>
                                            <p className="card-text">{movie.director}</p>
                                            <Link className="details-link" to={`/seenitdetails/${movie.id}`}>Details</Link>
                                        </div>
                                    </div>
                                </div>

                            )
                        }
                    })}

                </section>
                <Link className="view-all-link" to={"/seenit-all"}>View All</Link>
            </React.Fragment>
        )
    }
}
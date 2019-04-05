import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "../seenIt/seenit.css"
export default class SeenItAll extends Component {


    render() {
        // const movieArray = this.props.movies.filter(movie => {return movie.userId === sessionStorage.getItem('credentials') && movie.seenIt === true}).sort((a, b) => b.rank - a.rank).slice(0, 10)
        // const movieArray = this.props.movies.sort((a, b) => b.rank - a.rank)
        const movieArray = this.props.movies.filter(movie => {return movie.userId === sessionStorage.getItem('credentials') && movie.seenIt === true}).sort((a, b) => b.rank - a.rank)
        console.log(movieArray)

        return (
            <React.Fragment>
                <h1 className="seenit-header">All Movies</h1>
                <section className="seeIt">

                    {movieArray.map(movie => {
                        if (movie.seenIt === true && movie.userId === sessionStorage.getItem('credentials')) {
                            return (
                                <div key={movie.id} className="card">
                                    <img src={movie.image} className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <p className="card-text">{movie.title}</p>
                                        <p className="card-text">{movie.director}</p>
                                        <p className="card-text">{movie.rank}</p>
                                        <Link className="details-link" to={`/seenitdetails/${movie.id}`}>Details</Link>
                                    </div>
                                </div>
                            )
                        }
                    })}

                </section>
            </React.Fragment>
        )
    }
}
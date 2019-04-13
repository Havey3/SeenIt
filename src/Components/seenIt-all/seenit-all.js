
import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "../seenIt/seenit.css"

export default class SeenItAll extends Component {
    state = {
        moviesToRender: [],
        genreId: '',
        genre: []
    };

    filterMovies = evt => {
        const movieArray = this.props.movies.filter(movie => { return movie.userId === sessionStorage.getItem('credentials') && movie.seenIt === true && movie.genreId === evt.target.value}).sort((a, b) => b.rank - a.rank);
        this.setState({ moviesToRender: movieArray })
    };
    componentDidMount() {
        const newState = {};
        fetch(`http://localhost:5002/genre`).then(e => e.json())
            .then((genre) => {
                newState.genre = genre;
                this.setState(newState)
            })
    }

    render() {
        const moviesToRender = this.state.moviesToRender.length > 0 ? this.state.moviesToRender : this.props.movies;    

        return (
            <React.Fragment>
                <div className="attempt-div">
                <select className="form-control-all attempt-dropdown" onChange={this.filterMovies} id="genreId" defaultValue=''>
                <option value="0">View All</option>
                    {this.state.genre.map(singleGenre => {
                        // if(this.state.genre.id === this.props.movies.genreId) {
                        return (
                            <option className="attempt-option" key={singleGenre.id} value={singleGenre.id}>
                                {singleGenre.genre}
                            </option>
                            )
                        // }
                    })}
                </select>
                </div>
                <section className="seeIt">
                    {moviesToRender.sort((a, b) => b.rank - a.rank).map(movie => {
                        if (movie.seenIt === true && movie.userId === sessionStorage.getItem('credentials')){
                            return (
                                <div key={movie.id} className="card">
                                    <img src={movie.image} className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <p className="card-text">{movie.title}</p>
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
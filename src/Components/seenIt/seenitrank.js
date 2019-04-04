import React, { Component } from 'react'
import apiManager from '../../Modules/apiManager';
import "./seenit.css"

export default class SeenitRank extends Component {

    state = {
        movieTitle: '',
        movieDirector: '',
        movieImg: '',
        movieNotes: '',
        movieRank: '',
        seenIt: '',
        userId: ''
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        // This makes state get the value from
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };
    editMovie = evt => {
        evt.preventDefault();
        // Populate database
        const editMovie = {
            id: this.props.match.params.movieId,
            title: this.state.movieTitle,
            director: this.state.movieDirector,
            image: this.state.movieImg,
            notes: this.state.movieNotes,
            rank: this.state.movieRank,
            seenIt: true,
            userId: sessionStorage.getItem('credentials')
        }
        // directs user back to 'seeIt page'/loads movies
        this.props.editMovie(editMovie)
            .then(() => this.props.history.push("/seenIt"));
    }

    componentDidMount() {
        apiManager.singleMovie(this.props.match.params.movieId).then(movie => {
            this.setState({
                movieTitle: movie.title,
                movieDirector: movie.director,
                movieImg: movie.image,
                movieNotes: movie.notes,
                movieRank: movie.rank,
                seenIt: false,
                id: this.props.match.params.movieId
            })
        })
    }
    render() {
        const movie = this.props.movies.find(a => a.id === parseInt(this.props.match.params.movieId)) || {}
        return (
            <React.Fragment>
                <div className="seeIt-Container">
                    <section className="seeIt">
                    <div key = {movie.id} className="card">
                    <img src={movie.image} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <p className="card-text">{movie.title}</p>
                        <p className="card-text">{movie.director}</p>

                        <label htmlFor="exampleFormControlSelect1">Rank The Movie</label>
                        <select className="form-control" onChange={this.handleFieldChange} id="movieRank" value={this.state.movieRank} required>
                            <option value = "" disabled selceted>Choose a rank</option>
                            <option id="movieRank">1</option>
                            <option id="movieRank">2</option>
                            <option id="movieRank">3</option>
                            <option id="movieRank">4</option>
                            <option id="movieRank">5</option>
                        </select>
                        <label htmlFor="exampleFormControlTextarea1">Add Notes</label>
                        <textarea className="form-control" onChange={this.handleFieldChange} id="movieNotes" value={this.state.movieNotes} rows="3"></textarea>

                    <button
                        type="submit"
                        onClick={this.editMovie}
                        className="btn btn-primary"
                    >
                        Submit
          </button>
          </div>
          </div>
          </section>
          </div>
            </React.Fragment>
                )
            }

        }

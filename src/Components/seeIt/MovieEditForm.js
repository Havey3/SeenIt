import React, { Component } from 'react'
import "./seeit.css"
import apiManager from '../../Modules/apiManager';

export default class SeeItEdit extends Component {
    // Set State
    state = {
        movieTitle: '',
        movieDirector: '',
        movieImg: '',
        seenIt: '',
        userId: '',
        movieGenre: ''
    }

    // This is how state gets its information
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
            seenIt: false,
            userId: sessionStorage.getItem('credentials'),
            genreId: this.state.movieGenre
        }
        // directs user back to 'seeIt page'/loads movies
        this.props.editMovie(editMovie)
            .then(() => this.props.history.push("/seeIt"));
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
                id: this.props.match.params.movieId,
                movieGenre: movie.genreId
            })
        })
    }
    render() {
        return (
            <React.Fragment>
                <form className="seeitform">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Edit Movie</label>
                        <input type="text" className="form-control" onChange={this.handleFieldChange} id="movieTitle" value={this.state.movieTitle}></input>
                        <input type="text" className="form-control" onChange={this.handleFieldChange} id="movieDirector" value={this.state.movieDirector}></input>
                        <input type="img" className="form-control" onChange={this.handleFieldChange} id="movieImg" value={this.state.movieImg}></input>
                    </div>
                    <button
                        type="submit"
                        onClick={this.editMovie}
                        className="btn btn-primary"
                    >
                        Submit
          </button>
                </form>
            </React.Fragment>
        )
    }

}
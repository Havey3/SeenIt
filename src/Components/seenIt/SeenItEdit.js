import React, { Component } from 'react'
import "./seenit.css"
import apiManager from '../../Modules/apiManager';

export default class SeenItEdit extends Component {
    // Set State
    state = {
        movieTitle: '',
        movieDirector: '',
        movieImg: '',
        movieNotes: '',
        movieRank: '',
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
            notes: this.state.movieNotes,
            rank: this.state.movieRank,
            seenIt: true,
            userId: sessionStorage.getItem('credentials'),
            genreId: this.state.movieGenre
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
                        <label htmlFor="exampleFormControlInput1" className="label-edit">Edit Movie</label>
                        <input type="text" className="form-control" onChange={this.handleFieldChange} id="movieTitle" value={this.state.movieTitle}></input>
                        <input type="text" className="form-control" onChange={this.handleFieldChange} id="movieDirector" value={this.state.movieDirector}></input>
                        <input type="img" className="form-control" onChange={this.handleFieldChange} id="movieImg" value={this.state.movieImg}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1" className="label-edit">Edit Rank</label>
                        <select className="form-control" onChange={this.handleFieldChange} id="movieRank" value={this.state.movieRank}>
                            <option value="" disabled selceted>Choose a rank</option>
                            <option id="movieRank">1</option>
                            <option id="movieRank">2</option>
                            <option id="movieRank">3</option>
                            <option id="movieRank">4</option>
                            <option id="movieRank">5</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1" className="label-edit">Edit Notes</label>
                        <textarea className="form-control" onChange={this.handleFieldChange} id="movieNotes" value={this.state.movieNotes} rows="3"></textarea>
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
    // value={this.state.movieRank}

}
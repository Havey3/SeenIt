import React, { Component } from 'react'
import "./seeit.css"
import apiManager from '../../Modules/apiManager';

export default class SeeItEdit extends Component {
    // Set State
    state = {
        movieTitle: '',
        movieDirector: '',
        movieImg: '',
        movieNotes: '',
        movieRank: '',
        seenIt: '',
        userId: ''
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
            seenIt: false,
            userId: sessionStorage.getItem('credentials')
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
                id: this.props.match.params.movieId
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
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Edit Rank</label>
                        <select className="form-control" onChange={this.handleFieldChange} id="movieRank" value={this.state.movieRank}>
                            <option id="movieRank">1</option>
                            <option id="movieRank">2</option>
                            <option id="movieRank">3</option>
                            <option id="movieRank">4</option>
                            <option id="movieRank">5</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Edit Notes</label>
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

}
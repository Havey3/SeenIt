import React, { Component } from 'react'
import "./seeit.css"

export default class SeeItForm extends Component {
    // Set State
    state = {
        movieTitle: '',
        movieDirector: '',
        movieImg: '',
        movieNotes: '',
        movieRank: '',
        userId: ''
    }

    // This is how state gets its information
    handleFieldChange = evt => {
        const stateToChange = {};
        // This makes state get the value from
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    newMovie = evt => {
        evt.preventDefault();
        // Populate database
        const movie = {
            title: this.state.movieTitle,
            director: this.state.movieDirector,
            image: this.state.movieImg,
            notes: this.state.movieNotes,
            rank: this.state.movieRank,
            userId: sessionStorage.getItem('credentials')
        }
        // directs user back to 'seeIt page'/loads movies
        this.props.addMovie(movie)
            .then(() => this.props.history.push("/seeIt"));
    }
    render() {
        return (
            <React.Fragment>
                <form className="seeitform">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Add Movie</label>
                        <input type="text" className="form-control" onChange={this.handleFieldChange} id="movieTitle" placeholder="Movie Title"></input>
                        <input type="text" className="form-control" onChange={this.handleFieldChange} id="movieDirector" placeholder="Movie Director"></input>
                        <input type="img" className="form-control" onChange={this.handleFieldChange} id="movieImg" placeholder="Movie Image"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">Rank</label>
                        <select className="form-control" onChange={this.handleFieldChange} id="movieRank">
                            <option id="movieRank">1</option>
                            <option id="movieRank">2</option>
                            <option id="movieRank">3</option>
                            <option id="movieRank">4</option>
                            <option id="movieRank">5</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Notes</label>
                        <textarea className="form-control" onChange={this.handleFieldChange} id="movieNotes" rows="3"></textarea>
                    </div>
                    <button
                        type="submit"
                        onClick={this.newMovie}
                        className="btn btn-primary"
                    >
                        Submit
          </button>
                </form>
            </React.Fragment>
        )
    }

}
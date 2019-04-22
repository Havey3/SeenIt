import React, { Component } from 'react'
import "./seeit.css"

export default class SeeItForm extends Component {
    // Set State
    state = {
        movieTitle: '',
        movieDirector: '',
        movieImg: '',
        seenIt: '',
        userId: '',
        genreId: '',
        rank: '',
        genre: []
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
        if (this.state.genreId === 0) {
            window.alert("Choose a Genre")
        } else {
            const movie = {
                title: this.state.movieTitle,
                director: this.state.movieDirector,
                image: this.state.movieImg,
                seenIt: false,
                rank: this.state.rank,
                userId: sessionStorage.getItem('credentials'),
                genreId: this.state.genreId
            }
            // directs user back to 'seeIt page'/loads movies
            this.props.addMovie(movie)
                .then(() => this.props.history.push("/seeIt"));
        }
    }

    componentDidMount() {
        const newState = {};
        fetch(`http://localhost:5002/genre`).then(e => e.json())
            .then((genre) => {
                newState.genre = genre;
                this.setState(newState)
            })
    }


    render() {
        console.log(this.state.genreId)
        return (
            <React.Fragment>
                <form className="seeitform">
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1" className="label-edit">Add Movie</label>
                        <input type="text" className="form-control" onChange={this.handleFieldChange} id="movieTitle" placeholder="Movie Title"></input>
                        <input type="text" className="form-control" onChange={this.handleFieldChange} id="movieDirector" placeholder="Movie Director"></input>
                        <input type="img" className="form-control" onChange={this.handleFieldChange} id="movieImg" placeholder="Movie Image"></input>

                        <label htmlFor="exampleFormControlSelect1" className="label-edit">Add a Genre</label>
                        <select className="form-control" onChange={this.handleFieldChange} id="genreId" defaultValue=''
                            required>
                            <option value="" disabled>Choose a Genre</option>
                            {this.state.genre.map(genre => (

                                <option required key={genre.id} id={genre.id} value={genre.id}>{genre.genre}</option>
                            ))}

                        </select>
                        {/* <label htmlFor="exampleFormControlTextarea1">Add Notes</label>
                        <textarea className="form-control" onChange={this.handleFieldChange} id="movieNotes" value={this.state.movieNotes} rows="3"></textarea> */}
                    </div>
                    <button
                        type="submit"
                        onClick={this.newMovie}
                        className="myButton"
                    >
                        Submit
          </button>
                </form>
            </React.Fragment>
        )
    }

}
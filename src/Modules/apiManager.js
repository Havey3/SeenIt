const movieHost = 'http://localhost:5002'
export default {
    getAll: () => {
        return fetch(`${movieHost}/movies`).then(e => e.json())
    },
    postMovie: (newMovie) => {
        return fetch(`${movieHost}/movies`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMovie)
        }).then(data => data.json())
    },
    deleteMovie: id => {
        return fetch(`${movieHost}/movies/${id}`, {
            method: "DELETE"
        })
        .then(() => fetch(`${movieHost}/movies`))
        .then(e => e.json());
    }
}
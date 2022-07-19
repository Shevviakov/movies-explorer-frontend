class MoviesApi {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
    }


    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res);
    }

    _getMovies() {
        return fetch(`${this._baseUrl}/beatfilm-movies`)
            .then(this._checkResponse);
    }

    getMovies() {
        const promise = new Promise((resolve, reject) => {
            if (this.Movies) {
                resolve(this.Movies)
            } else {
                this._getMovies()
                    .then(data => {
                        this.Movies = data
                        resolve(data)
                    })
                    .catch(err => reject(err))
            }
        })
        return promise
    }

    getImgUrl(url) {
        return `${this._baseUrl + url}`
    }

    findMovies(searchString, shortFilms) {
        return this.getMovies()
            .then(movies => {
                return Promise.resolve(
                    movies.filter(
                        (movie) =>
                            movie.nameRU.toLowerCase().includes(searchString.toLowerCase())
                            && (shortFilms ? movie.duration <= 40 : true)
                    )
                )
            })
    }
}

const apiObj = new MoviesApi({
    baseUrl: `https://api.nomoreparties.co`,
});

export default apiObj;
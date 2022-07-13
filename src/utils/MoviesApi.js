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

    getMovies() {
        return fetch(`${this._baseUrl}`)
            .then(this._checkResponse);
    }

}

const apiObj = new MoviesApi({
    baseUrl: `https://api.nomoreparties.co/beatfilm-movies`,
});

export default apiObj;
import React from "react";

import moviesApi from '../../utils/MoviesApi'
import mainApi from '../../utils/MainApi'
import utils from '../../utils/AppUtils'

import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchForm from "../SearchForm/SearchForm";

import LoadMore from "../LoadMore/LoadMore";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from '../Preloader/Preloader'

import './Movies.css'

export default function Movies(props) {
    const [movies, _setMovies] = React.useState(JSON.parse(localStorage.getItem('movies')))
    const [searchState, _setSearchState] = React.useState(JSON.parse(localStorage.getItem('search')))
    const [favoriteMovies, setFavoriteMovies] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [apiError, setApiError] = React.useState("")
    const [cardsCount, setCardsCount] = React.useState(utils.getInitialCardsCount())

    function setMovies(movies) {
        localStorage.setItem('movies', JSON.stringify(movies))
        _setMovies(movies)
    }

    function setSearchState(state) {
        localStorage.setItem('search', JSON.stringify(state))
        _setSearchState(state)
    }

    // Update cards count on resize
    React.useEffect(() => {
        function checkCardsCount() {
            if (cardsCount < utils.getInitialCardsCount()) {
                setCardsCount(utils.getInitialCardsCount())
            }
        }
        let timer
        function resizeHandler() {
            clearTimeout(timer)
            timer = setTimeout(checkCardsCount, 200)
        }


        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler);
    }, [])

    // Load saved movies on component mounting if movies exist in localstorage
    React.useEffect(() => {
        if (movies) {
            mainApi.getMovies()
                .then(favoriteMovies => {
                    setFavoriteMovies(favoriteMovies)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [])



    React.useEffect(() => {
        if (movies && favoriteMovies) {
            const fMHash = favoriteMovies.reduce((prev, cur) => {
                prev[cur.movieId] = cur
                return prev
            }, {})
            movies.forEach(m => { m.isLiked = m.id in fMHash })
            setMovies([...movies])
        }
    }, [favoriteMovies])

    function onLikeClick(movie) {
        favoriteMovies.filter(fMovie => fMovie.movieId === movie.id).length ? removeLike(movie) : addLike(movie)
    }

    function addLike(movie) {
        const {
            country,
            director,
            duration,
            year,
            description,
            image: { url: imagePath, formats: { thumbnail: { url: thumbnailPath } } },
            trailerLink: trailer,
            nameEN,
            nameRU,
            id: movieId,
        } = movie

        const image = moviesApi.getImgUrl(imagePath)
        const thumbnail = moviesApi.getImgUrl(thumbnailPath)
        const fMovie = {
            country,
            director,
            duration,
            year,
            description,
            image,
            trailer,
            nameEN,
            nameRU,
            thumbnail,
            movieId,
        }
        return mainApi.addMovie(fMovie)
            .then(setFavoriteMovies([...favoriteMovies, fMovie]))
            .catch(err => console.log(err))
    }

    function removeLike(movie) {
        mainApi.deleteMovie({ movieId: movie.id })
            .then(setFavoriteMovies(favoriteMovies.filter((m) => m.movieId !== movie.id)))
            .catch(err => console.log(err))
    }

    function onSearchFilms(state) {
        setLoading(true)

        const errHandler = (err) => {
            console.log(err)
            setLoading(false)
            setApiError("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз")
        }

        const successHandler = (foundMovies) => {
            setCardsCount(utils.getInitialCardsCount)
            setLoading(false)
            setSearchState(state)
            setMovies(foundMovies)
        }

        if (favoriteMovies === null) {
            return Promise.all([
                moviesApi.findMovies(state.filmTitle, state.shortFilms),
                mainApi.getMovies()
            ]).then(([foundMovies, favoriteMovies]) => {
                successHandler(foundMovies)
                setFavoriteMovies(favoriteMovies)
            })
                .catch(errHandler)
        } else {
            return moviesApi.findMovies(state.filmTitle, state.shortFilms)
                .then(successHandler)
                .catch(errHandler)
        }
    }

    function onLoadMore() {
        setCardsCount(cardsCount + utils.getCardsCountIncrement())
    }

    return (
        <>
            <Header />
            <main className="movies">
                <SearchForm state={searchState} onSearchFilms={onSearchFilms} />
                {loading ? <Preloader /> :
                    apiError ? <span className="movies__error">{apiError}</span> :
                        (movies && !movies.length) ? <span className="movies__tooltip">Ничего не найдено</span> :
                            (
                                movies && <MoviesCardList>
                                    {movies.slice(0, cardsCount).map((movie) =>
                                        <MoviesCard
                                            key={movie.id}
                                            movie={movie}
                                            onLike={onLikeClick}
                                        />
                                    )}
                                </MoviesCardList>
                            )
                }
                {movies && movies.length > cardsCount && <LoadMore onClick={onLoadMore} />}
            </main>
            <Footer />
        </>
    )
}
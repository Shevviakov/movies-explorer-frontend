import React from "react";

import mainApi from '../../utils/MainApi'
import utils from '../../utils/AppUtils'

import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchForm from "../SearchForm/SearchForm";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from '../Preloader/Preloader'

export default function SavedMovies(props) {
    const [favoriteMovies, setFavoriteMovies] = React.useState(null)
    const [searchMovies, setSearchMovies] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [apiError, setApiError] = React.useState("")
    const [cardsCount, setCardsCount] = React.useState(utils.getInitialCardsCount())

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

    React.useEffect(() => {
        setLoading(true)
        mainApi.getMovies()
            .then(favoriteMovies => {
                setLoading(false)
                setFavoriteMovies(favoriteMovies)
            })
            .catch(err => {
                setLoading(false)
                console.log(`Can't load favorite movies ${err}`)
                setApiError("Во время загрузки сохраненных фильмов произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте обновить")
            })
    }, [])

    function onSearchFilms(state) {
        if (!favoriteMovies) { return }
        const searchMovies = favoriteMovies.filter(
            (movie) =>
                movie.nameRU.toLowerCase().includes(state.filmTitle.toLowerCase())
                && (state.shortFilms ? movie.duration <= 40 : true)
        )
        setSearchMovies(searchMovies)
    }

    function onDeleteClick(movie) {
        const { movieId } = movie
        mainApi.deleteMovie({ movieId })
            .then(movie => {
                const newFavoriteMovies = favoriteMovies.filter((m) => { return m.movieId !== movie.movieId })
                setFavoriteMovies(newFavoriteMovies)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <Header />
            <main className="saved-movies">
                <SearchForm onSearchFilms={onSearchFilms} saved={true} />
                {loading ? <Preloader /> :
                    apiError ? <span className="movies__error">{apiError}</span> :
                        (favoriteMovies && !favoriteMovies.length) ? <span className="movies__tooltip">У вас нет сохраненных фильмов</span> :
                            (
                                favoriteMovies && <MoviesCardList>
                                    {(searchMovies ? searchMovies : favoriteMovies).map((movie) =>
                                        <MoviesCard
                                            key={movie.movieId}
                                            movie={movie}
                                            saved={true}
                                            onDelete={onDeleteClick}
                                        />
                                    )}
                                </MoviesCardList>
                            )
                }
            </main>
            <Footer />
        </>
    )
}
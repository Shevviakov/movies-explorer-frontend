import React from "react";

import mainApi from '../../utils/MainApi'
import utils from '../../utils/AppUtils'

import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchForm from "../SearchForm/SearchForm";

import LoadMore from "../LoadMore/LoadMore";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from '../Preloader/Preloader'

export default function SavedMovies(props) {
    const [favoriteMovies, setFavoriteMovies] = React.useState(null)
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
                console.log(favoriteMovies)
            })
            .catch(err => {
                setLoading(false)
                console.log(`Can't load favorite movies ${err}`)
                setApiError("Во время загрузки сохраненных фильмов произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте обновить")
            })
    }, [])

    return (
        <>
            <Header />
            <main className="saved-movies">
                <SearchForm />
                {loading ? <Preloader /> :
                    apiError ? <span className="movies__error">{apiError}</span> :
                        (favoriteMovies && !favoriteMovies.length) ? <span className="movies__tooltip">У вас нет сохраненных фильмов</span> :
                            (
                                favoriteMovies && <MoviesCardList>
                                    {favoriteMovies.map((movie) =>
                                        <MoviesCard
                                            key={movie.movieId}
                                            movie={movie}
                                            saved={true}
                                        //onLike={onLikeClick}
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
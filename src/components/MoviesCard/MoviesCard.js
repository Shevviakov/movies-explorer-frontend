import React from "react";

import moviesApi from '../../utils/MoviesApi'

import './MoviesCard.css'

export default function MoviesCard(props) {
    const { movie, onLike, saved } = props
    function openTrailer(e) {
        const classList = e.target.classList
        if (classList.contains('movies-card__like-btn')) {
            return
        }
        window.open(movie.trailerLink, "_blank", "noopener, noreferrer")
    }

    function onLikeHandler() {
        onLike(movie)
    }

    function stringDuration(duration) {
        if (duration < 0) {
            return '-'
        } else if (duration < 60) {
            return `${duration}м`
        } else if (duration >= 60) {
            const h = Math.floor(duration / 60)
            const m = duration % 60
            return m > 0 ? `${h}ч ${m}м` : `${h}ч`
        }
    }

    return (
        <li className="movies-card" onClick={openTrailer} >
            <img className="movies-card__image" src={saved ? movie.image : moviesApi.getImgUrl(movie.image.url)} alt={movie.nameRU}></img>
            <div className="movies-card__content">
                <div className="movies-card__title-like-group">
                    <p className="movies-card__title" title={movie.nameRU} >{movie.nameRU}</p>
                    {
                        saved ?
                            <button className={`link movies-card__like-btn ${movie.isLiked ? "movies-card__like-btn_active" : ""}`} type="button" onClick={onLikeHandler} aria-label="Кнопка лайка карточки" />
                            :
                            <button className={`link movies-card__like-btn ${movie.isLiked ? "movies-card__like-btn_active" : ""}`} type="button" onClick={onLikeHandler} aria-label="Кнопка лайка карточки" />

                    }
                </div>
                <p className="movies-card__duration">{stringDuration(movie.duration)}</p>
            </div>
        </li>
    )
}
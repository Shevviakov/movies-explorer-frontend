import React from "react";

import './MoviesCard.css'

export default function MoviesCard(props) {
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
        <li className="movies-card">
            <img className="movies-card__image" src={props.img} alt={props.title}></img>
            <div className="movies-card__content">
                <div className="movies-card__title-like-group">
                    <p className="movies-card__title">{props.title}</p>
                    <button className={`link movies-card__like-btn + ${props.isLiked ? "movies-card__like-btn_active" : ""}`} type="button" aria-label="Кнопка лайка карточки" />
                </div>
                <p className="movies-card__duration">{stringDuration(props.duration)}</p>
            </div>
        </li>
    )
}
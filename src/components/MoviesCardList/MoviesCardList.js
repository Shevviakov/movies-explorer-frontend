import React from "react";

import './MoviesCardList.css'

export default function MoviesCardList(props) {
    return (
        <div className="movies-card-list">
            <ul className="movies-card-list__container">
                {props.children}
            </ul>
        </div>
    )
}
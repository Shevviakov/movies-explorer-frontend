import react from "react";
import React from "react";
import { Link, useHistory } from "react-router-dom";

import './ErrNotFound.css'

export default function ErrNotFound(props) {
    const history = useHistory()
    return (
        <main className="not-found">
            <h1 className="not-found__title">404</h1>
            <h2 className="not-found__subtitle">Страница не найдена</h2>
            <Link className="link not-found__back" onClick={history.goBack}>Назад</Link>
        </main>
    )
}
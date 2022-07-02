import React from "react";
import Button from "../Button/Button";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

import './SearchForm.css'

export default function SearchForm(props) {
    return (
        <form className="searchform">
            <label className="searchform__input-container">
                <input className="searchform__input" placeholder="Фильм"></input>
                <Button className="searchform__input-submit" type="submit">Поиск</Button>
            </label>
            <FilterCheckbox value="Короткометражки" checked={false} />
        </form>
    )
}
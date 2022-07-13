import React from "react";
import Button from "../Button/Button";
import FilterCheckBox from "../FilterCheckBox/FilterCheckBox";

import './SearchForm.css'

export default function SearchForm(props) {
    return (
        <form className="searchform">
            <label className="searchform__input-container">
                <input className="searchform__input" placeholder="Фильм" required></input>
                <Button className="searchform__input-submit" type="submit">Поиск</Button>
            </label>
            <FilterCheckBox value="Короткометражки" checked={false} />
        </form>
    )
}
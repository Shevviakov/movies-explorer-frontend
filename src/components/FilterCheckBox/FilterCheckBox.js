import React from "react";

import './FilterCheckBox.css'

export default function FilterCheckBox(props) {
    return (
        <label className="filter-checkbox">
            <input className="filter-checkbox__invisible-checkbox" type="checkbox" />
            <div className="filter-checkbox__visible-checkbox">
                <div className="filter-checkbox__toggle"></div>
            </div>
            <span className="filter-checkbox__title">{props.value} </span>
        </label >

    )
}
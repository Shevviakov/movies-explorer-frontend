import React from "react";

import './FilterCheckBox.css'

export default function FilterCheckBox(props) {
    const { title, id, name, checked, onChange } = props
    return (
        <label className="filter-checkbox">
            <input className="filter-checkbox__invisible-checkbox" type="checkbox" id={id} name={name} onChange={onChange} checked={checked} />
            <div className="filter-checkbox__visible-checkbox">
                <div className="filter-checkbox__toggle"></div>
            </div>
            <span className="filter-checkbox__title">{title} </span>
        </label >

    )
}
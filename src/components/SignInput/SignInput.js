import React from "react";

import './SignInput.css'

export default function SignInput(props) {
    const {
        id, name, type, value, placeholder, required = false,
        className = "", labelText = "", errorMsg = "",
        state, setState,
    } = props

    function handleChange(e) {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    return (
        <label className={`signinput ${className}`}>
            <span className="signinput__label">{labelText}</span>
            <input className={`signinput__input ${errorMsg ? "signinput__input_error" : ""}`} onChange={handleChange} id={id} name={name} type={type} value={value} placeholder={placeholder} required={required} />
            <span className={`signinput__error ${errorMsg ? "signinput__error_active" : ""}`}>{errorMsg || "placeholder"}</span>
        </label>
    )
}
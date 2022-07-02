import React from "react";

import './SignInput.css'

export default function SignInput(props) {
    return (
        <label className={`signinput ${props.className || ""}`}>
            <span className="signinput__label">{props.labelText}</span>
            <input className={`signinput__input ${props.errorMsg ? "signinput__input_error" : ""}`} type={props.type} />
            <span className={`signinput__error ${props.errorMsg ? "signinput__error_active" : ""}`}>{props.errorMsg || "placeholder"}</span>
        </label>
    )
}
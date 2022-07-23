import React from "react";

import './SignInput.css'

export default function SignInput(props) {
    const {
        className = "", labelText = "",
        state, setState, errorMsgs, setErrorMsgs, valid, setValid, ...rest
    } = props
    const name = rest.name
    const errorMsg = errorMsgs[name] || ""
    const value = state[name] || ""

    const inputEl = React.createRef();

    React.useEffect(() => {
        setValid({ ...valid, [name]: inputEl.current.validity.valid })
    }, [valid, name, inputEl, setValid])

    function handleChange(e) {
        const { name, value, validationMessage } = e.target
        setState({ ...state, [name]: value })
        setErrorMsgs({ ...errorMsgs, [name]: validationMessage })
        setValid({ ...valid, [name]: inputEl.current.validity.valid })
    }

    return (
        <label className={`signinput ${className}`}>
            <span className="signinput__label">{labelText}</span>
            <input {...rest} ref={inputEl} className={`signinput__input ${errorMsg ? "signinput__input_error" : ""}`} onChange={handleChange} value={value} />
            <span className={`signinput__error ${errorMsg ? "signinput__error_active" : ""}`}>{errorMsg || "placeholder"}</span>
        </label>
    )
}
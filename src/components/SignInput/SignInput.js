import React from "react";

import utils from '../../utils/AppUtils'

import './SignInput.css'

export default function SignInput(props) {
    const {
        className = "", labelText = "",
        state, setState, errorMsgs, setErrorMsgs, valid, setValid, customMsg, ...rest
    } = props
    const name = rest.name
    const errorMsg = errorMsgs[name] || ""
    const value = state[name] || ""

    const inputEl = React.createRef();

    React.useEffect(() => {
        setValid({ ...valid, [name]: inputEl.current.validity.valid })
    }, [])

    function handleChange(e) {
        const { name, value, validationMessage } = e.target
        setState({ ...state, [name]: value })
        const errMsg = e.target.validity.valid ? "" : customMsg || validationMessage
        setErrorMsgs({ ...errorMsgs, [name]: errMsg })
        setValid({ ...valid, [name]: e.target.validity.valid })
    }

    return (
        <label className={`signinput ${className}`}>
            <span className="signinput__label">{labelText}</span>
            <input {...rest} ref={inputEl} className={`signinput__input ${errorMsg ? "signinput__input_error" : ""}`} onChange={handleChange} value={value} />
            <span className={`signinput__error ${errorMsg ? "signinput__error_active" : ""}`}>{errorMsg || "placeholder"}</span>
        </label>
    )
}
import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import LogoButton from "../LogoButton/LogoButton";

import './SignBase.css'

export default function SignBase(props) {
    const { onSubmit } = props
    const [state, setState] = React.useState({})
    const [errorMsgs, setErrorMsgs] = React.useState({})
    const [valid, setValid] = React.useState({})
    const disabled = Object.values(errorMsgs).some(err => !!err) || Object.values(valid).some(err => !err)

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(state);
    }

    return (
        <form className="signbase" onSubmit={handleSubmit}>
            <div className={"signbase__header"}>
                <LogoButton className="signbase__logo" />
                <h1 className="signbase__title">{props.titleText}</h1>
            </div>
            <div className="signbase__content">
                {React.Children.map(props.children, (child) => {
                    return React.cloneElement(child, { state, setState, errorMsgs, setErrorMsgs, valid, setValid })
                })}
            </div>
            <div className="signbase__footer">
                <p className={`signbase__error-msg ${props.errorMsg ? "signbase__error-msg_active" : ""}`}>{props.errorMsg || "placeholder"}</p>
                <Button className="signbase__submit-btn" type="submit" disabled={disabled} >{props.submitText}</Button>
                <div className="signbase__footer-container">
                    <p className="signbase__footer-text">{props.footerText}</p>
                    <Link className="link signbase__footer-link" to={props.footerLinkUrl}>{props.footerLinkText}</Link>
                </div>
            </div>
        </form >
    )
}
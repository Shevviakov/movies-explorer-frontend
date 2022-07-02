import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import LogoButton from "../LogoButton/LogoButton";

import './SignBase.css'

export default function SignBase(props) {
    return (
        <main className="signbase">
            <div className={`signbase__header ${props.className || ""}`}>
                <LogoButton className="signbase__logo" />
                <h1 className="signbase__title">{props.titleText}</h1>
            </div>
            {props.children}
            <div className="signbase__footer">
                <Button className="signbase__submit-btn">{props.submitText}</Button>
                <div className="signbase__footer-container">
                    <p className="signbase__footer-text">{props.footerText}</p>
                    <Link className="link signbase__footer-link" to={props.footerLinkUrl}>{props.footerLinkText}</Link>
                </div>
            </div>
        </main >
    )
}
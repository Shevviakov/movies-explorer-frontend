import React from "react";

import './LogoButton.css'

import { ReactComponent as Logo } from '../../images/logo.svg';

export default function LogoButton(props) {
    return (
        <a href='/' className={`link logo-btn ${props.className || ''}`} aria-label="Логотип сайта" >
            <Logo />
        </a >
    )
}
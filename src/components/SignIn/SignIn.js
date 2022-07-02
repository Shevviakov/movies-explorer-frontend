import React from "react";
import SignBase from "../SignBase/SignBase";
import SignInput from "../SignInput/SignInput";

import './SignIn.css'

export default function SignIn(props) {
    return (
        <SignBase
            titleText="Рады видеть!"
            submitText="Войти"
            footerText="Ещё не зарегистрированы?"
            footerLinkUrl="/signup"
            footerLinkText="Регистрация"
        >
            <SignInput
                type="email"
                labelText="E-mail"
                errorMsg=""
            />
            <SignInput
                type="password"
                labelText="Пароль"
                errorMsg=""
            />
        </SignBase>
    )
}
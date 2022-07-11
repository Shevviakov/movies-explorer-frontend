import React from "react";
import SignBase from "../SignBase/SignBase";
import SignInput from "../SignInput/SignInput";

import './SignIn.css'

export default function SignIn(props) {
    const [state, setState] = React.useState({
        email: "",
        password: "",
    })
    return (
        <SignBase
            titleText="Рады видеть!"
            submitText="Войти"
            footerText="Ещё не зарегистрированы?"
            footerLinkUrl="/signup"
            footerLinkText="Регистрация"
            {...{ setState, state }}
        >
            <form className="signin__form">
                <SignInput
                    id="email"
                    name="email"
                    type="email"
                    labelText="E-mail"
                    errorMsg=""
                    required={true}
                />
                <SignInput
                    id="password"
                    name="password"
                    type="password"
                    labelText="Пароль"
                    errorMsg=""
                    required={true}
                />
            </form>
        </SignBase>
    )
}
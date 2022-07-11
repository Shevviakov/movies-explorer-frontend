import React from "react";
import SignBase from "../SignBase/SignBase";
import SignInput from "../SignInput/SignInput";

import './SignUp.css'

export default function SignUp(props) {
    const [state, setState] = React.useState({
        name: "",
        email: "",
        password: "",
    })
    return (
        <SignBase className="signup"
            titleText="Добро пожаловать!"
            submitText="Зарегистрироваться"
            footerText="Уже зарегистрированы?"
            footerLinkUrl="/signin"
            footerLinkText="Войти"
            {...{ setState, state }}
        >
            <SignInput
                id="name"
                name="name"
                type="text"
                labelText="Имя"
                errorMsg=""
                required={true}
            />
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
                errorMsg="Что-то пошло не так..."
                required={true}
            />
        </SignBase>
    )
}
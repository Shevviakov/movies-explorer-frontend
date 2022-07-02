import React from "react";
import SignBase from "../SignBase/SignBase";
import SignInput from "../SignInput/SignInput";

import './SignUp.css'

export default function SignUp(props) {
    return (
        <SignBase className="signup"
            titleText="Добро пожаловать!"
            submitText="Зарегистрироваться"
            footerText="Уже зарегистрированы?"
            footerLinkUrl="/signin"
            footerLinkText="Войти"
        >
            <form className="signup__form">
                <SignInput
                    type="text"
                    labelText="Имя"
                    errorMsg=""
                />
                <SignInput
                    type="email"
                    labelText="E-mail"
                    errorMsg=""
                />
                <SignInput
                    type="password"
                    labelText="Пароль"
                    errorMsg="Что-то пошло не так..."
                />
            </form>
        </SignBase>
    )
}
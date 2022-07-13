import React from "react";

import mainApi from '../../utils/MainApi'

import SignBase from "../SignBase/SignBase";
import SignInput from "../SignInput/SignInput";

import './SignUp.css'

export default function SignUp(props) {

    const [apiError, setApiError] = React.useState("")

    function handleSignUp(state) {
        mainApi.signup(state).then(() => {
            return mainApi.signin(state)
        })
            .then(() => {
                props.onSignIn()
            })
            .catch(err => {
                setApiError(err || "При авторизации произошла ошибка.")
            });

    }

    return (
        <SignBase className="signup"
            titleText="Добро пожаловать!"
            submitText="Зарегистрироваться"
            footerText="Уже зарегистрированы?"
            footerLinkUrl="/signin"
            footerLinkText="Войти"
            errorMsg={apiError}
            onSubmit={handleSignUp}
        >
            <SignInput
                id="name"
                name="name"
                type="text"
                labelText="Имя"
                required={true}
                pattern="[- A-Za-zА-Яа-я]+"
            />
            <SignInput
                id="email"
                name="email"
                type="email"
                labelText="E-mail"
                required={true}
            />
            <SignInput
                id="password"
                name="password"
                type="password"
                labelText="Пароль"
                required={true}
            />
        </SignBase>
    )
}
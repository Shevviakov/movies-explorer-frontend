import React from "react";
import { NAME_PATTERN, NAME_VALIDATION_MESSAGE } from "../../utils/consts";

import mainApi from '../../utils/MainApi'

import SignBase from "../SignBase/SignBase";
import SignInput from "../SignInput/SignInput";

import './SignUp.css'

export default function SignUp(props) {

    const [apiError, setApiError] = React.useState("")
    const [disabled, setDisabled] = React.useState(false)

    function handleSignUp(state) {
        setDisabled(true)
        mainApi.signup(state).then(() => {
            return mainApi.signin(state)
        })
            .then(() => {
                props.onSignIn()
            })
            .catch(err => {
                setApiError(err || "При авторизации произошла ошибка.")
            })
            .finally(() => {
                setDisabled(false)
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
            disabled={disabled}
        >
            <SignInput
                id="name"
                name="name"
                type="text"
                labelText="Имя"
                required={true}
                customMsg={NAME_VALIDATION_MESSAGE}
                pattern={NAME_PATTERN}
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
import React from "react";

import mainApi from '../../utils/MainApi'

import SignBase from "../SignBase/SignBase";
import SignInput from "../SignInput/SignInput";

import './SignIn.css'

export default function SignIn(props) {

    const [apiError, setApiError] = React.useState("")
    const [disabled, setDisabled] = React.useState(false)

    function handleSignin(state) {
        setDisabled(true)
        mainApi.signin(state).then(() => {
            props.onSignIn()
        })
            .catch(err =>
                setApiError(err)
            )
            .finally(() => {
                setDisabled(false)
            });

    }
    return (
        <SignBase className="signin"
            titleText="Рады видеть!"
            submitText="Войти"
            footerText="Ещё не зарегистрированы?"
            footerLinkUrl="/signup"
            footerLinkText="Регистрация"
            errorMsg={apiError}
            onSubmit={handleSignin}
            disabled={disabled}
        >
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
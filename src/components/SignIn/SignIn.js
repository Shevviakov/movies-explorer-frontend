import React from "react";

import mainApi from '../../utils/MainApi'

import SignBase from "../SignBase/SignBase";
import SignInput from "../SignInput/SignInput";

import './SignIn.css'

export default function SignIn(props) {

    const [apiError, setApiError] = React.useState("")

    function handleSignin(state) {
        mainApi.signin(state).then(() => {
            props.onSignIn()
        })
            .catch(err =>
                setApiError(err)
            );

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
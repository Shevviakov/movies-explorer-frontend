import React from "react";

import mainApi from '../../utils/MainApi'
import { NAME_PATTERN, NAME_VALIDATION_MESSAGE } from '../../utils/consts'

import Header from "../Header/Header";

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import './Profile.css'

export default function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext)
    const [pending, setPending] = React.useState(false)
    const [state, setState] = React.useState({
        name: currentUser.name,
        email: currentUser.email,
    })
    const [errorMsgs, setErrorMsgs] = React.useState({
        name: "",
        email: "",
    })
    const [valid, setValid] = React.useState({
        name: true,
        email: true,
    })
    const [apiMsg, setApiMsg] = React.useState("")
    const [isApiErr, setIsApiErr] = React.useState(false)

    const disabled = pending || Object.values(errorMsgs).some(err => !!err)
        || Object.values(valid).some(err => !err)
        || (state.name === currentUser.name && state.email === currentUser.email)


    const customMsgs = {
        "name": NAME_VALIDATION_MESSAGE,
    }

    function handleChange(e) {
        const { name, value, validationMessage } = e.target
        setState({ ...state, [name]: value })
        const errMsg = e.target.validity.valid ? "" : customMsgs[name] || validationMessage
        setErrorMsgs({ ...errorMsgs, [name]: errMsg })
        setValid({ ...valid, [name]: e.target.validity.valid })
    }

    function onSignOut() {
        mainApi.signout()
            .then(() => {
                props.onSignOut()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function onUserEdit(e) {
        e.preventDefault();
        setPending(true)
        mainApi.updateMe(state)
            .then((user) => {
                setApiMsg("Данные успешно обновлены")
                setIsApiErr(false)
                props.onProfileUpdate(user)
            })
            .catch((err) => {
                setApiMsg(err)
                setIsApiErr(true)
                console.log(err)
            })
            .finally(() => {
                setPending(false)
            })
    }

    return (
        <>
            <Header />
            <main className="profile">
                <h1 className="profile__title">Привет, {currentUser.name}!</h1>
                <form className="profile__form">
                    <label className="profile__input-field-container">
                        <span className={`profile__input-err-msg ${errorMsgs.name ? "profile__input-err-msg_active" : ""}`}>{errorMsgs.name || "placeholder"}</span>
                        <div className="profile__input-container">
                            <span className="profile__input-label">Имя</span>
                            <input className={`profile__input ${!valid.name ? "profile__input_error" : ""}`}
                                id="name"
                                name="name"
                                type="text"
                                pattern={NAME_PATTERN}
                                required

                                onChange={handleChange}
                                value={state.name}
                            />
                        </div>
                    </label>
                    <label className="profile__input-field-container">
                        <div className="profile__input-container">
                            <span className="profile__input-label">E-mail</span>
                            <input className={`profile__input ${!valid.email ? "profile__input_error" : ""}`}
                                id="email"
                                name="email"
                                type="email"
                                required

                                onChange={handleChange}
                                value={state.email}
                            />
                        </div>
                        <span className={`profile__input-err-msg ${errorMsgs.email ? "profile__input-err-msg_active" : ""}`}>{errorMsgs.email || "placeholder"}</span>
                    </label>
                    <div className="profile__btn-container">
                        <span className={`profile__api-msg ${isApiErr ? "profile__api-msg_error" : ""} ${apiMsg ? "profile__api-msg_active" : ""}`}>
                            {apiMsg || "placeholder"}
                        </span>
                        <button className="link profile__btn profile__edit" type="submit" disabled={disabled} onClick={onUserEdit} >Редактировать</button>
                        <button className="link profile__btn profile__logout" type="button" onClick={onSignOut}>Выйти из аккаунта</button>
                    </div>
                </form>
            </main>
        </>
    )
}
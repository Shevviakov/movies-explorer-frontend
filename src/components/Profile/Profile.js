import React from "react";
import Header from "../Header/Header";

import './Profile.css'

export default function Profile(props) {
    return (
        <>
            <Header />
            <main className="profile">
                <h1 className="profile__title">Привет, Виталий!</h1>
                <form className="profile__form">
                    <label className="profile__input-container">
                        <span className="profile__input-label">Имя</span>
                        <input className="profile__input" value={"Виталий"} />
                    </label>
                    <label className="profile__input-container">
                        <span className="profile__input-label">E-mail</span>
                        <input className="profile__input" value={"pochta@yandex.ru"} type="email" />
                    </label>
                    <div className="profile__btn-container">
                        <button className="link profile__btn profile__edit">Редактировать</button>
                        <button className="link profile__btn profile__logout">Выйти из аккаунта</button>
                    </div>
                </form>
            </main>
        </>
    )
}
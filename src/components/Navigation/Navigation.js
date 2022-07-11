import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css';

import { ReactComponent as ProfileIcon } from '../../images/profile.svg'

export default function Navigation(props) {
    const [navActive, setNavActive] = React.useState(false)

    function openNav() {
        setNavActive(true)
    }

    function closeNav() {
        setNavActive(false)
    }

    return (
        <nav className={`navigation ${navActive ? "navigation_active" : ""}`}>
            <button className="link navigation__burger-btn" onClick={openNav} />
            <div className={`navigation__background ${navActive ? "navigation__background_active" : ""}`} onClick={closeNav} />
            <div className={`navigation__container ${navActive ? "navigation__container_active" : ""}`}>
                <button className="link navigation__close-btn" onClick={closeNav} />
                <ul className="navigation__list">
                    <li className="navigation__list-item navigation__link-main-page">
                        <NavLink to="/" exact={true} className="link navigation__link" activeClassName="navigation__link_active">Главная</NavLink>
                    </li>
                    <li className="navigation__list-item">
                        <NavLink to="/movies" className="link navigation__link" activeClassName="navigation__link_active">Фильмы</NavLink>
                    </li>
                    <li className="navigation__list-item">
                        <NavLink to="/saved-movies" className="link navigation__link" activeClassName="navigation__link_active">Cохранённые фильмы</NavLink>
                    </li>
                </ul>
                <NavLink to="/profile" className="link navigation__profile">
                    <span className="navigation__profile-text">Аккаунт</span>
                    <div className="navigation__profile-icon-container">
                        <ProfileIcon className="navigation__profile-icon" />
                    </div>
                </NavLink>
            </div>
        </nav>
    )
}
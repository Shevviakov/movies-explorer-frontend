import React from 'react';
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button';
import './Header.css';

import Navigation from '../Navigation/Navigation';
import LogoButton from '../LogoButton/LogoButton';

export default function Header(props) {
  let loggedIn = true
  return (
    <header className={`header ${props.className || ''}`}>
      <LogoButton className="header__logo" />
      {
        loggedIn ? <Navigation active /> :
          <>
            <NavLink to="/sign-up" className="header__link header__sign-up-btn" >Регистрация</NavLink>
            <NavLink to="/sign-in" className="header__link">
              <Button className="header__link header__sign-in-btn">Войти</Button>
            </NavLink>
          </>
      }
    </header>
  )
}
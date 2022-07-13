import React from 'react';
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button';
import './Header.css';

import Navigation from '../Navigation/Navigation';
import LogoButton from '../LogoButton/LogoButton';
import { AppContext } from '../../contexts/AppContext';

export default function Header(props) {
  const context = React.useContext(AppContext)
  return (
    <header className={`header ${props.className || ''}`}>
      <LogoButton className="header__logo" />
      {
        context.loggedIn ? <Navigation active /> :
          <>
            <NavLink to="/signup" className="header__link header__sign-up-btn" >Регистрация</NavLink>
            <NavLink to="/signin" className="header__link">
              <Button className="header__link header__sign-in-btn">Войти</Button>
            </NavLink>
          </>
      }
    </header>
  )
}
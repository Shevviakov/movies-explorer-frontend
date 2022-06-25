import React from 'react';
import { Route, Link } from 'react-router-dom'
import Button from '../Button/Button';
import './Header.css';

import { ReactComponent as Logo } from '../../images/logo.svg';

export default function Header(props) {
  return (
    <header className={`header ${props.className || ''}`}>
      <a href='/' className="header__logo" aria-label="Логотип сайта">
        <Logo />
      </a>
      <Link to="/sign-up" className="header__link header__sign-up-btn" >Регистрация</Link>
      <Link to="/sign-in" className="header__link">
        <Button className="header__link header__sign-in-btn">Войти</Button>
      </Link>
    </header>
  )
}
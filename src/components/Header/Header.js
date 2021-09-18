import React from 'react';
import './Header.css';

import logoImg from '../../images/logo.svg';

export default function Header(props) {
  return (
    <header className={`header ${props.className || ''}`}>
      <a href='/' className="header__logo-link" aria-label="Логотип сайта">
        <img classNmae="header__logo" src={logoImg} alt="логотип сайта" />
        {props.children}
      </a>
    </header>
  )
}
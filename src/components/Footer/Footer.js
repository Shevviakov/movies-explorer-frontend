import React from 'react';

import './Footer.css';

export default function Footer(props) {
  return (
    <footer className="footer">
      <p className="footer__about-project">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container" >
        <p className="footer__copyright">© {new Date().getFullYear()}</p>
        <nav className="footer__navigation-list">
          <li className="footer__navigation-item">
            <a className="footer__navigation-link" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
          </li>
          <li className="footer__navigation-item">
            <a className="footer__navigation-link" href="https://github.com/Shevviakov">Github</a>
          </li>
          <li className="footer__navigation-item">
            <a className="footer__navigation-link" href="https://facebook.com">Facebook</a>
          </li>
        </nav>
      </div>
    </footer>
  );
}
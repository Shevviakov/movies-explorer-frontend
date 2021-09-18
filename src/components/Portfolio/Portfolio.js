import React from 'react';
import MainSection from '../MainSection/MainSection';

import './Portfolio.css';

export default function Portfolio(props) {
  return (
    <MainSection className="protfolio" titleClassName="portfolio__title" title="Портфолио">
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://facebook.com">Статичный сайт</a>
          </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://facebook.com">Адаптивный сайт</a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://facebook.com">Одностраничное приложение</a>
        </li>
      </ul>
    </MainSection>
  );
}
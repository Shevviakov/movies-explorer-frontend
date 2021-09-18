import React from 'react';
import MainSection from '../MainSection/MainSection';

import './AboutMe.css';

import myPhoto from '../../images/my-photo.jpg';

export default function AboutMe(props) {
  return (
    <MainSection className="about-me" title="Студент">
      <div className="about-me__container">
        <img src={myPhoto} alt="Моя фотография"></img>
        <div className="about-me__text-content">
          <h3 className="about-me__name">Виталий</h3>
          <p className="about-me__briefly">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__bio">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
    и&nbsp;дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по <span className="about-me__bio-nowrap">веб-разработке,</span> начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <ul className="about-me__contacts">
            <li className="about-me__contact-item">
              <a className="about-me__contact-link" href="https://www.facebook.com/">Facebook</a>
            </li>
            <li className="about-me__contact-item">
              <a className="about-me__contact-link" href="https://github.com/">Github</a>
            </li>
          </ul>
        </div>
      </div>
    </MainSection>
  );
}
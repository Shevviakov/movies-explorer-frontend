import React from 'react';
import Button from '../Button/Button';
import './Promo.css';

import promoImg from '../../images/promo.svg';

export default function Promo(props) {
  return (
    <div className="promo">
      <article className="promo_block">
        <h1 className="promo__title">Учебный проект студента факультета <span className="promo__text-nowrap">Веб-разработки.</span></h1>
        <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <Button className="promo__button">Узнать больше</Button>
      </article>
      <img className="promo__logo" src={promoImg} alt="Силуэт земного шара, составленный из слова 'WEB'" />
    </div>
  )
}
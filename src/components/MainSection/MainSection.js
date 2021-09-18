import React from 'react';
import './MainSection.css';

export default function MainSection(props) {
  return (
    <section className={`main-section ${props.className || ''}`}>
      <h2 className={`main-section__title ${props.titleClassName || ''}`}>{props.title}</h2>
      {props.children}
    </section>
  )
}
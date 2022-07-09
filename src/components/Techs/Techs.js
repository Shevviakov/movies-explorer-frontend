import React from 'react';
import MainSection from '../MainSection/MainSection';

import './Techs.css';

export default function Techs(props) {
  return (
    <MainSection className="techs"
      titleClassName="techs__section-title"
      title="Технологии"
    >
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="techs__tech-list">
        <li className="techs__tech-item">HTML</li>
        <li className="techs__tech-item">CSS</li>
        <li className="techs__tech-item">JS</li>
        <li className="techs__tech-item">React</li>
        <li className="techs__tech-item">Git</li>
        <li className="techs__tech-item">Express.js</li>
        <li className="techs__tech-item">mongoDB</li>
      </ul>
    </MainSection>
  )
}
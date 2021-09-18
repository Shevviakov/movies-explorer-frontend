import React from 'react';
import MainSection from '../MainSection/MainSection';

import './AboutProject.css';

export default function AboutProject(props) {
  return (
    <MainSection className="about-project" title="О проекте">
      <div className="about-project__facts">
            <p className="about-project__fact about-project__fact_title">Дипломный проект включал 5 этапов</p>
            <p className="about-project__fact about-project__fact_title">На выполнение диплома ушло 5 недель</p>
            <p className="about-project__fact about-project__fact_subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            <p className="about-project__fact about-project__fact_subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className="about-project__diagram">
        <p className="about-project__time about-project__time_backend">1 неделя</p>
        <p className="about-project__time">4 недели</p>
        <p className="about-project__diagram-subscription">Back-end</p>
        <p className="about-project__diagram-subscription">Front-end</p>
      </div>
    </MainSection>
  )
}
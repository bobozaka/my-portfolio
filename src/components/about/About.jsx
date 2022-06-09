import React from 'react';
import './About.css';
import ME from '../../assets/avatar2.jpg';
import { FaAward } from 'react-icons/fa';
import { MdWorkOutline } from 'react-icons/md';

const About = () => {
  return (
    <section id="about">
      <h5>Познакомимся</h5>
      <h2>Обо мне </h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Опыт</h5>
              <small>Junior</small>
            </article>
            <article className="about__card">
              <MdWorkOutline className="about__icon" />
              <h5>Работ</h5>
              <small>5+ проэктов </small>
            </article>
          </div>
          <p>
            В последние годы я проходил службу по контракту в ВС РФ, потом понял что мне это
            неинтересно и сделал вывод, что мне интересна сфера IT , а именно frontend. Я начал
            активно изучать это направление с прошлого года, прошёл курсы на скилл боксе, и с каждым
            днём познаю в этом деле новые навыки путём самообучения. Мечтаю найти работу, где я
            смогу совершенствовать свои знания и навыки, и получить огромный опыт в IT индустрии.
          </p>

          <a href="#contact" className="btn btn-primary">
            Давай поговорим
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

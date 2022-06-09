import React from 'react';
import './Experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id="experiance">
      <h5>Какими навыками я обладаю</h5>
      <h2>Мой опыт</h2>
      <div className="container experiance__container">
        <div className="experiance__frontend">
          <h3>Frontend Development</h3>
          <div className="experiance__content">
            <arcticle className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                {' '}
                <h4>HTML</h4>
                <small сlassName="text-light ">Средний</small>
              </div>
            </arcticle>
            <arcticle className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>CSS</h4>
                <small сlassName="text-light ">Средний</small>
              </div>
            </arcticle>
            <arcticle className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small сlassName="text-light ">Средний</small>
              </div>
            </arcticle>
            <arcticle className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small сlassName="text-light ">Средний</small>
              </div>
            </arcticle>
            <arcticle className="experiance__details">
              <BsPatchCheckFill className="experiance__details-icon" />
              <div>
                <h4>React</h4>
                <small сlassName="text-light ">Средний</small>
              </div>
            </arcticle>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

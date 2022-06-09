import React from 'react';
import './Header.css';
import Resume from '../../assets/Resume.pdf';
import ME from '../../assets/avatar-top.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Привет Я</h5>
        <h1>Костя Шатов</h1>
        <h5 className="text-light">Frontend Developer </h5>
        <div className="cta">
          <a href={Resume} download className="btn">
            Cкачать резюме
          </a>
          <a href="#contact" className="btn btn-primary">
            Давай поговорим
          </a>
        </div>
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className="scroll__down">
          Прокрутите вниз
        </a>
      </div>
    </header>
  );
};

export default Header;

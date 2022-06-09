import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { TiSocialVimeo } from 'react-icons/ti';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="fotor__logo">
        Костя Шатов
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Домой</a>
        </li>
        <li>
          <a href="#about">Обо мне</a>
        </li>
        <li>
          <a href="#experiance">Мой опыт</a>
        </li>
        <li>
          <a href="#services"> Услуги</a>
        </li>
        <li>
          <a href="#portfolio">Портфолио</a>
        </li>
        <li>
          <a href="#testimonials">Отзывы</a>
        </li>
        <li>
          <a href="#contact">Контакты</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://vk.com/kostya_shatov" target="_blank" rel="noreferrer">
          <TiSocialVimeo />
        </a>
        <a href="https://github.com/bobozaka" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/костя-шатов-049522228"
          target="_blank"
          rel="noreferrer">
          <BsLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy;Костя Шатов.все права защишиены.</small>
      </div>
    </footer>
  );
};

export default Footer;

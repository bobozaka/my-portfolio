import React from 'react';
import Pizza from '../../assets/reac-pizza.jpg';
import Cat from '../../assets/cat.png';
import ToDoList from '../../assets/toDolist.png';
import Lagoona from '../../assets/logona.png';
import Evclid from '../../assets/evclid.png';
import Blog from '../../assets/Blog.png';
import Jpan from '../../assets/jpan.png';
import Pet from '../../assets/img/pet.jpeg';
import Hotel from '../../assets/React-hotel-spa.png';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Мои последние работы</h5>
      <h2>Портфолио</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Blog} alt="blpg" />
          </div>
          <h3>Blog</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/bobozaka/blog-mern-front"
              className="btn"
              target="_blank"
              rel="noreferrer">
              Github
            </a>
            <a
              href="https://blog-mern-frontend-sigma.vercel.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Pet} alt="blpg" />
          </div>
          <h3>Pet-first</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/bobozaka/pet-first"
              className="btn"
              target="_blank"
              rel="noreferrer">
              Github
            </a>
            <a
              href="https://pet-first-30n9aqsl7-bobozaka.vercel.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Hotel} alt="blpg" />
          </div>
          <h3>React-hotel-spa
</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/bobozaka/hotel-spa-react"
              className="btn"
              target="_blank"
              rel="noreferrer">
              Github
            </a>
            <a
              href="https://hotel-spa-react-m39kh59y1-bobozaka.vercel.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Pizza} alt="pizza" />
          </div>
          <h3>React-pizza</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/bobozaka/React-pizza"
              className="btn"
              target="_blank"
              rel="noreferrer">
              Github
            </a>
            <a
              href="https://react-pizza-2fkdeor0b-bobozaka.vercel.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Cat} alt="cat" />
          </div>
          <h3>Кошачий пинтерест</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/bobozaka/frontend-challenge-uzi.ru"
              className="btn"
              target="_blank"
              rel="noreferrer">
              Github
            </a>
            <a
              href="https://bobozaka.github.io/frontend-challenge-uzi.ru/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Jpan} alt="Japanese-cuisine" />
          </div>
          <h3>Японская кухня</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/bobozaka/Japanese-cuisine"
              className="btn"
              target="_blank"
              rel="noreferrer">
              Github
            </a>
            <a
              href="https://japanese-5fobx9zkm-bobozaka.vercel.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ToDoList} alt="ToDoList" />
          </div>
          <h3>ToDoList</h3>
          <div className="portfolio__item-cta">
            {' '}
            <a
              href="https://github.com/bobozaka/ToDoList"
              className="btn"
              target="_blank"
              rel="noreferrer">
              Github
            </a>
            <a
              href="https://bobozaka.github.io/ToDoList/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Lagoona} alt="Lagoona" />
          </div>
          <h3>Lagoona</h3>
          <div className="portfolio__item-cta">
            {' '}
            <a
              href="https://github.com/bobozaka/lagoona"
              className="btn"
              target="_blank"
              rel="noreferrer">
              Github
            </a>
            <a
              href="https://bobozaka.github.io/lagoona/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Evclid} alt="Evclid" />
          </div>
          <h3>Евклид</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/bobozaka/site-2.0"
              className="btn"
              target="_blank"
              rel="noreferrer">
              Github
            </a>
            <a
              href="https://bobozaka.github.io/site-2.0/"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;

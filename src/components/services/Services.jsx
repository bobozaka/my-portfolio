import React from 'react';
import './Services.css';
import { BsCheck } from 'react-icons/bs';

const Services = () => {
  return (
    <section id="services">
      <h5>Что я предлгаю</h5>
      <h2>Услуги</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Веб-разработка</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
                adipisci velit...
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
                adipisci velit...
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
                adipisci velit...
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
                adipisci velit...
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;

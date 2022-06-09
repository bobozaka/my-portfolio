import React, { useRef } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { TiSocialVimeo } from 'react-icons/ti';
import { ImWhatsapp } from 'react-icons/im';
import emailjs from '@emailjs/browser';

import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fokmqyv', 'template_1e6ca1a', form.current, 'rGVryl4un8j04IsA6');

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Выходи на связь</h5>
      <h2>Контакты</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <arcticle className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>Shatovkk@gmail.com</h5>
            <a href="mailto:Shatovkk@gmail.com" target="_blank" rel="noreferrer">
              Отправить сообщения
            </a>
          </arcticle>
          <arcticle className="contact__option">
            <TiSocialVimeo className="contact__option-icon" />
            <h4>Vk</h4>
            <h5>https://vk.com/kostya_shatov</h5>
            <a href="https://vk.com/kostya_shatov" target="_blank" rel="noreferrer">
              Отправить сообщения
            </a>
          </arcticle>
          <arcticle className="contact__option">
            <ImWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>Нажми ниже</h5>
            <a href="https://wa.me/79856111225" target="_blank" rel="noreferrer">
              Отправить сообщения
            </a>
          </arcticle>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Как тебя зовут" required />
          <input type="email" name="email" placeholder="Твоя почта" required />
          <textarea name="message" rows="7" placeholder="Твоё сообщения" required></textarea>
          <button type="submit" className="btn btn-primary">
            Отправить сообщения
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';
import { MdOutlineHome } from 'react-icons/md';
import { FaUserNinja } from 'react-icons/fa';
import { GiEvilBook } from 'react-icons/gi';
// import { RiServiceLine } from 'react-icons/ri';
import { IoIosContact } from 'react-icons/io';
import { useState } from 'react';
import './Nav.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <MdOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}>
        <FaUserNinja />
      </a>
      <a
        href="#experiance"
        onClick={() => setActiveNav('#experiance')}
        className={activeNav === '#experiance' ? 'active' : ''}>
        <GiEvilBook />
      </a>
      {/* <a
        href="#services"
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}>
        <RiServiceLine />
      </a> */}
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}>
        <IoIosContact />
      </a>
    </nav>
  );
};

export default Nav;

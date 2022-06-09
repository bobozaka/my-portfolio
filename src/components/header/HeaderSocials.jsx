import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { TiSocialVimeo } from 'react-icons/ti';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://vk.com/kostya_shatov" target="_blank" rel="noreferrer">
        <TiSocialVimeo />
      </a>
      <a href="https://github.com/bobozaka" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/костя-шатов-049522228" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
    </div>
  );
};

export default HeaderSocials;

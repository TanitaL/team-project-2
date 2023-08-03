import React from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from '@react-hook/media-query';
import sprite from 'assets/svg/sprite-cards.svg';
import css from './Logo.module.css';

const Logo = () => {
  const isSmallScreen = useMediaQuery('(max-width: 767px)');
  const isMediumScreen = useMediaQuery('(min-width: 768px)');

  return (
    <NavLink key={'/'} to={'/'}>
      {isSmallScreen && (
        <svg width="116" height="20">
          <use href={`${sprite}#icon-logo-mobile`}></use>
        </svg>
      )}
      {isMediumScreen && (
        <span className={css.logo}>
          <svg width="116" height="20">
            <use href={`${sprite}#icon-logo-desktop-tablet`}></use>
          </svg>
        </span>
      )}
    </NavLink>
  );
};

export default Logo;

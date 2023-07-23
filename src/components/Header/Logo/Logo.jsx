import React from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from '@react-hook/media-query';

import LogoSvg from '../../../assets/svg/logo-mobile-optimized.svg';
import LogoBigSvg from '../../../assets/svg/logo-desktop-tablet-opt.svg';

import css from './Logo.module.css';

const Logo = () => {
  const isSmallScreen = useMediaQuery('(max-width: 767px)');
  const isMediumScreen = useMediaQuery(
    '(min-width: 768px) and (max-width: 1280px)'
  );

  return (
    <NavLink key={'/'} to={'/'}>
      {isSmallScreen && <img src={LogoSvg} alt="logo" className={css.logo} />}
      {isMediumScreen && (
        <img src={LogoBigSvg} alt="logo" className={css.logo} />
      )}
    </NavLink>
  );
};

export default Logo;

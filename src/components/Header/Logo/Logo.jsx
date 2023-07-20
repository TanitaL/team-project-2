import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoSvg from '../../../assets/svg/logo-mobile-optimized.svg';
import css from './Logo.module.css';

const Logo = () => {
  return (
    <NavLink
      key={'/'}
      to={'/'}
      className={({ isActive }) => (isActive ? `${css.active}` : `${css.link}`)}
    >
      <img src={LogoSvg} alt="logo" className={css.logo} />
    </NavLink>
  );
};

export default Logo;

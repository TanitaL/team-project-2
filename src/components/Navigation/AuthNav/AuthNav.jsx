import React from 'react';
import { NavLink } from 'react-router-dom';
import RegisterBtn from '../../Buttons/RegisterBtn/RegisterBtn';
import LoginBtn from '../../Buttons/LoginBtn/LoginBtn';
import css from './AuthNav.module.css';

const AuthNav = ({ closeBurgerMenu }) => {
  return (
    <nav className={css.authNav}>
      <NavLink key={'login'} to={'login'} className={css.link}>
        <LoginBtn closeBurgerMenu={closeBurgerMenu} />
      </NavLink>

      <NavLink key={'register'} to={'register'} className={css.link}>
        <RegisterBtn closeBurgerMenu={closeBurgerMenu} />
      </NavLink>
    </nav>
  );
};

export default AuthNav;

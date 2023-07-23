import React from 'react';
import { NavLink } from 'react-router-dom';
import RegisterBtn from '../../Buttons/RegisterBtn/RegisterBtn';
import css from './AuthNav.module.css';
import LoginBtn from '../../Buttons/LoginBtn/LoginBtn';

const AuthNav = ({ closeBurgerMenu }) => {
  return (
    <nav className={css.authNav}>
      <NavLink
        key={'login'}
        to={'login'}
        className={({ isActive }) =>
          isActive ? `${css.active}` : `${css.link}`
        }
      >
        <LoginBtn closeBurgerMenu={closeBurgerMenu} />
      </NavLink>
      <NavLink
        key={'register'}
        to={'register'}
        className={({ isActive }) =>
          isActive ? `${css.active}` : `${css.link}`
        }
      >
        <RegisterBtn closeBurgerMenu={closeBurgerMenu} />
      </NavLink>
    </nav>
  );
};

export default AuthNav;

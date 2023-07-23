import React from 'react';
import { NavLink } from 'react-router-dom';
// import { useMediaQuery } from '@react-hook/media-query';
import RegisterBtn from '../../Buttons/RegisterBtn/RegisterBtn';
import LoginBtn from '../../Buttons/LoginBtn/LoginBtn';
import css from './AuthNav.module.css';
// import BurgerMenu from 'components/Header/BurgerMenu/BurgerMenu';
// import UserBtn from 'components/Buttons/UserBtn/UserBtn';

const AuthNav = ({ closeBurgerMenu }) => {
  //   const isSmallScreen = useMediaQuery('(max-width: 767px)');

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

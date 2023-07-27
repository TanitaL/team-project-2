import React from 'react';
import RegisterBtn from '../../Buttons/RegisterBtn/RegisterBtn';
import LoginBtn from '../../Buttons/LoginBtn/LoginBtn';
import css from './AuthNav.module.css';
// import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <nav className={css.authNav}>
      <LoginBtn />
      <RegisterBtn />
    </nav>
  );
};

export default AuthNav;

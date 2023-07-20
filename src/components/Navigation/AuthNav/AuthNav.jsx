import React from 'react';
import { NavLink } from 'react-router-dom';
import RegisterBtn from '../../Buttons/RegisterBtn';
import LogInBtn from '../../Buttons/LogInBtn/LoginBtn';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <nav className={css.authNav}>
      <NavLink
        key={'login'}
        to={'login'}
        className={({ isActive }) =>
          isActive ? `${css.active}` : `${css.link}`
        }
      >
        <LogInBtn />
      </NavLink>

      <NavLink
        key={'register'}
        to={'register'}
        className={({ isActive }) =>
          isActive ? `${css.active}` : `${css.link}`
        }
      >
        <RegisterBtn />
      </NavLink>
    </nav>
  );
};

export default AuthNav;

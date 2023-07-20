import React from 'react';
import { NavLink } from 'react-router-dom';
import RegisterBtn from '../../Buttons/RegisterBtn/RegisterBtn';
import css from './AuthNav.module.css';
import LogInBtn from '../../Buttons/LogInBtn/LogInBtn';

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

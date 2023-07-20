import React from 'react';
import { NavLink } from 'react-router-dom';
import LogInBtn from 'components/Buttons/LogInBtn/LogInBtn';
import RegisterBtn from 'components/Buttons/RegisterBtn/RegisterBtn';
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

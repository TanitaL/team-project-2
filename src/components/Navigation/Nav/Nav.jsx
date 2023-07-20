import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={css.nav}>
        <NavLink
            key={'news'}
            to={'news'}
            className={({ isActive }) =>
                isActive ? `${css.active}` : `${css.link}`
            }
        >
            News
        </NavLink>
          
        <NavLink
            key={'notices'}
            to={'notices'}
            className={({ isActive }) =>
                isActive ? `${css.active}` : `${css.link}`
            }
        >
            Find pet
        </NavLink>
          
        <NavLink
            key={'friends'}
            to={'friends'}
            className={({ isActive }) =>
                isActive ? `${css.active}` : `${css.link}`
            }
        >
            Our friends
        </NavLink>
    </nav>
  );
};

export default Nav;

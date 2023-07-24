import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector } from 'redux/auth/selectors';
import UserBtn from 'components/Buttons/UserBtn/UserBtn';
import Logout from 'components/Logout/Logout';
import css from './UserNav.module.css';

const UserNav = ({ closeBurgerMenu }) => {
  const isAuth = useSelector(authSelector);

  return (
    <>
      {isAuth && (
        <>
          <nav className={css.userNav}>
            <NavLink key={'user'} to={'user'}>
              <UserBtn closeBurgerMenu={closeBurgerMenu} />
            </NavLink>
          </nav>
          <Logout />
        </>
      )}
    </>
  );
};

export default UserNav;

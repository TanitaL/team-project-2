import React from 'react';
import { useSelector } from 'react-redux';
import { authSelector } from 'redux/auth/selectors';
import Nav from './Nav/Nav';
import AuthNav from './AuthNav/AuthNav';
import UserNav from './UserNav/UserNav';
import css from './Navigation.module.css';
import { useMediaQuery } from '@react-hook/media-query';

const Navigation = ({ closeBurgerMenu }) => {
  const isAuth = useSelector(authSelector);
  const isDesktopScreen = useMediaQuery('(min-width: 1280px)');

  return (
    <>
      {isDesktopScreen && (
        <>
          <Nav />
          <div className={css.navigation}>
            {!isAuth ? (
              <AuthNav closeBurgerMenu={closeBurgerMenu} />
            ) : (
              <UserNav closeBurgerMenu={closeBurgerMenu} />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Navigation;

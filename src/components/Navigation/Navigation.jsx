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
  const isTabletScreen = useMediaQuery('(min-width: 768px)');
  const isDesktopScreen = useMediaQuery('(min-width: 1280px)');

  return (
    // <div className={css.navigationWrap}>
    <>
      {isDesktopScreen && <Nav />}
      {isTabletScreen && (
        <div className={css.navigation}>
          {!isAuth ? (
            <AuthNav closeBurgerMenu={closeBurgerMenu} />
          ) : (
            <UserNav closeBurgerMenu={closeBurgerMenu} />
          )}
        </div>
      )}
    </>
    // </div>
  );
};

export default Navigation;

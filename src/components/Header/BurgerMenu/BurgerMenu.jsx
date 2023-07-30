import React from 'react';
import { useSelector } from 'react-redux';
import { authSelector, userSelector } from 'redux/auth/selectors';
import { useMediaQuery } from '@react-hook/media-query';
import { useBurgerContext } from 'context/BurgerProvider';
import AuthNav from 'components/Navigation/AuthNav/AuthNav';
import Nav from 'components/Navigation/Nav/Nav';
import UserNav from 'components/Navigation/UserNav/UserNav';
import Logout from 'components/Logout/Logout';
import sprite from 'assets/svg/sprite-cards.svg';
import css from './BurgerMenu.module.css';

const BurgerMenu = () => {
  const { menuOpen, setMenuOpen } = useBurgerContext();
  const auth = useSelector(userSelector);
  const isAuth = useSelector(authSelector);

  console.log(isAuth);

  const isSmallScreen = useMediaQuery('(max-width: 767px)');
  const isMediumScreen = useMediaQuery(
    '(min-width: 768px) and (max-width: 1279px)'
  );

  const openBurgerMenu = event => {
    setMenuOpen(true);
  };

  const closeBurgerMenu = event => {
    setMenuOpen(false);
  };

  return (
    <>
      {menuOpen ? (
        <>
          {isMediumScreen && !isAuth && <AuthNav />}

          <div className={css.headerNav}>
            {isMediumScreen && isAuth && (
              <div className={css.userNav}>
                <Logout />
              </div>
            )}

            <button
              type="button"
              onClick={closeBurgerMenu}
              className={css.burgerMenuBtn}
            >
              <svg width="24" height="24">
                <use href={`${sprite}#icon-menu-hamburger-cross`}></use>
              </svg>
            </button>
          </div>

          <div className={css.burgerOpenNavigation}>
            {isSmallScreen && !isAuth && <AuthNav />}

            {isSmallScreen && isAuth && (
              <div className={css.userNav}>
                <UserNav closeBurgerMenu={closeBurgerMenu} />
                <p>{auth.name}</p>
              </div>
            )}

            <Nav closeBurgerMenu={closeBurgerMenu} />

            {isSmallScreen && isAuth && <Logout />}
          </div>
        </>
      ) : (
        <>
          {isMediumScreen && !isAuth && <AuthNav />}
          {isMediumScreen && auth && (
            <div className={css.userNav}>
              <UserNav />
            </div>
          )}

          <div className={css.burgerHeader}>
            <button
              type="button"
              className={css.burgerMenuBtn}
              onClick={openBurgerMenu}
            >
              <svg width="24" height="24">
                <use href={`${sprite}#icon-menu-hamburger-yellow`}></use>
              </svg>
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default BurgerMenu;

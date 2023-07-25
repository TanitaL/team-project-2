import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from 'redux/auth/selectors';
import { useMediaQuery } from '@react-hook/media-query';
import { ReactComponent as BurgerOpenSvg } from '../../../assets/svg/menu-hamburger-opt.svg';
import { ReactComponent as BurgerCloseSvg } from '../../../assets/svg/menu-hamburger-cross-opt.svg';
import AuthNav from 'components/Navigation/AuthNav/AuthNav';
import Nav from 'components/Navigation/Nav/Nav';
import PublicRoute from 'routes/PublicRoute';
import PrivateRoute from 'routes/PrivateRoute';
import UserNav from 'components/Navigation/UserNav/UserNav';
import { useBurgerContext } from 'context/BurgerProvider';
import css from './BurgerMenu.module.css';

const BurgerMenu = () => {
  const { menuOpen, setMenuOpen } = useBurgerContext();
  const { name } = useSelector(userSelector);

  const isSmallScreen = useMediaQuery('(max-width: 767px)');
  const isMediumScreen = useMediaQuery(
    '(min-width: 768px) and (max-width: 1280px)'
  );

  const openBurgerMenu = event => {
    setMenuOpen(true);
  };

  const closeBurgerMenu = event => {
    setMenuOpen(false);
  };

  return (
    <>
      {isMediumScreen && (
        <PublicRoute>
          <AuthNav />
        </PublicRoute>
      )}

      {isMediumScreen && (
        <div className={css.userNav}>
          <PrivateRoute>
            <UserNav />
            <p>{name}</p>
          </PrivateRoute>
        </div>
      )}
      {menuOpen ? (
        <>
          <button
            type="button"
            onClick={closeBurgerMenu}
            className={css.burgerMenuBtn}
          >
            <BurgerCloseSvg />
          </button>

          <div className={css.burgerOpenNavigation}>
            {isSmallScreen && (
              <PublicRoute>
                <AuthNav closeBurgerMenu={closeBurgerMenu} />{' '}
              </PublicRoute>
            )}
            {isSmallScreen && (
              <PrivateRoute>
                <div className={css.userNav}>
                  <UserNav closeBurgerMenu={closeBurgerMenu} />
                  <p>{name}</p>
                </div>
              </PrivateRoute>
            )}

            <Nav closeBurgerMenu={closeBurgerMenu} />
          </div>
        </>
      ) : (
        <>
          <div className={css.burgerHeader}>
            <button
              type="button"
              className={css.burgerMenuBtn}
              onClick={openBurgerMenu}
            >
              <BurgerOpenSvg />
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default BurgerMenu;

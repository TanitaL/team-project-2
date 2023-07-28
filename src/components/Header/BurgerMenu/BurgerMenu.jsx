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
import Logout from 'components/Logout/Logout';

const BurgerMenu = () => {
  const { menuOpen, setMenuOpen } = useBurgerContext();
  const user = useSelector(userSelector);
  console.log(user);

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
      {menuOpen ? (
        <>
          {isMediumScreen && (
            <PublicRoute>
              <AuthNav />
            </PublicRoute>
          )}

          <div className={css.headerNav}>
            {isMediumScreen && (
              <>
                <PrivateRoute>
                  <div className={css.userNav}>
                    <Logout />
                  </div>
                </PrivateRoute>
              </>
            )}

            <button
              type="button"
              onClick={closeBurgerMenu}
              className={css.burgerMenuBtn}
            >
              <BurgerCloseSvg />
            </button>
          </div>

          <div className={css.burgerOpenNavigation}>
            {isSmallScreen && (
              <PublicRoute>
                <AuthNav closeBurgerMenu={closeBurgerMenu} />
              </PublicRoute>
            )}
            {isSmallScreen && (
              <PrivateRoute>
                <div className={css.userNav}>
                  <UserNav closeBurgerMenu={closeBurgerMenu} />
                  {user.name && <p>{user.name}</p>}
                </div>
              </PrivateRoute>
            )}
            <Nav closeBurgerMenu={closeBurgerMenu} />
            {isSmallScreen && (
              <PrivateRoute>
                <Logout />
              </PrivateRoute>
            )}
          </div>
        </>
      ) : (
        <>
          {isMediumScreen && (
            <PublicRoute>
              <AuthNav />
            </PublicRoute>
          )}
          {isMediumScreen && (
            <PrivateRoute>
              <div className={css.userNav}>
                <UserNav />
              </div>
            </PrivateRoute>
          )}
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

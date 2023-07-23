import React from 'react';
import BurgerMenuSvg from '../../../assets/svg/menu-hamburger-optimized.svg';
import BurgerMenuClose from '../../../assets/svg/menu-hamburger-cross-optimized.svg';
import css from './BurgerMenu.module.css';
import AuthNav from 'components/Navigation/AuthNav/AuthNav';
import Nav from 'components/Navigation/Nav/Nav';
import PublicRoute from 'routes/PublicRoute';
import PrivateRoute from 'routes/PrivateRoute';
import UserNav from 'components/Navigation/UserNav/UserNav';
import { useSelector } from 'react-redux';
import { userSelector } from 'redux/auth/selectors';
import { useMediaQuery } from '@react-hook/media-query';
import { useBurgerContext } from 'context/BurgerProvider';

const BurgerMenu = () => {
  // const [menuOpen, setMenuOpen] = useState(false);

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
    <div>
      {menuOpen ? (
        <div>
          <button
            type="button"
            onClick={closeBurgerMenu}
            className={css.headerBurgerMenu}
          >
            <img
              src={BurgerMenuClose}
              alt="burger-menu-button"
              width={24}
              height={24}
            />
          </button>

          <div className={css.burgerNavigation}>
            <PublicRoute>
              {isSmallScreen && <AuthNav closeBurgerMenu={closeBurgerMenu} />}
            </PublicRoute>
            <PrivateRoute>
              <div className={css.userNav}>
                <UserNav closeBurgerMenu={closeBurgerMenu} />
                <p>{name}</p>
              </div>
            </PrivateRoute>
            <Nav closeBurgerMenu={closeBurgerMenu} />
            {/* <LogoutBtn /> */}
          </div>
        </div>
      ) : (
        <div className={css.burgerHeader}>
          <PublicRoute>{isMediumScreen && <AuthNav />}</PublicRoute>
          <PrivateRoute>
            {isMediumScreen && (
              <div className={css.userNav}>
                <UserNav /> <p>{name}</p>
              </div>
            )}
          </PrivateRoute>
          <button
            type="button"
            className={css.headerBurgerMenu}
            onClick={openBurgerMenu}
          >
            <img
              src={BurgerMenuSvg}
              alt="burger-menu-button"
              width={24}
              height={24}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;

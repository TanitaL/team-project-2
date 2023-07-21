import React, { useState } from 'react';
import BurgerMenuSvg from '../../../assets/svg/menu-hamburger-optimized.svg';
import BurgerMenuClose from '../../../assets/svg/menu-hamburger-cross-optimized.svg';
import css from './BurgerMenu.module.css';
import AuthNav from 'components/Navigation/AuthNav/AuthNav';
import Nav from 'components/Navigation/Nav/Nav';

const BurgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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

          <div className={css.burgerAuthNav}>
            <AuthNav />
            <Nav />
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default BurgerMenu;

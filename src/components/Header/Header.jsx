import React from 'react';
import Logo from './Logo/Logo';
// import Navigation from 'components/Navigation/Navigation';
import css from './Header.module.css';
import BurgerMenu from './BurgerMenu/BurgerMenu';

const Header = () => {
  return (
    <header className={css.header}>
      <Logo />
      <BurgerMenu />
      {/* <Navigation /> */}
    </header>
  );
};

export default Header;

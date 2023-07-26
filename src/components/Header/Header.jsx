import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import Logo from './Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import css from './Header.module.css';

const Header = () => {
  const isMediumScreen = useMediaQuery('(max-width: 1279px)');

  return (
    <header className={css.header}>
      <Logo />
      <Navigation />
      {isMediumScreen && <BurgerMenu />}
    </header>
  );
};

export default Header;

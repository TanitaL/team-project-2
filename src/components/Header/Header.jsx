import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import Logo from './Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import BurgerMenu from './BurgerMenu/BurgerMenu';

import css from './Header.module.css';
// import UserNav from 'components/Navigation/UserNav/UserNav';

const Header = () => {
  const isSmallScreen = useMediaQuery('(max-width: 1279px)');
  // const isMediumScreen = useMediaQuery(
  //   '(min-width: 768px) and (max-width: 1280px)'
  // );

  return (
    <header className={css.header}>
      <Logo />
      {isSmallScreen ? <BurgerMenu /> : <Navigation />}
    </header>
  );
};

export default Header;

import React from 'react';
import Pets from '../../../assets/images/bg-pets-mobile-1x-cut-opt.png';
import PetsTablet from '../../../assets/images/bg-pets-tablet-1x-opt.png';

import css from './MainPage.module.css';
import Container from 'components/Container/Container';
import { useMediaQuery } from '@react-hook/media-query';

const MainPage = () => {
  const isSmallScreen = useMediaQuery('(max-width: 767px)');
  const isMediumScreen = useMediaQuery(
    '(min-width: 768px) and (max-width: 1280px)'
  );
  return (
    <div className={css.bgImgMobile}>
      <h1 className={css.textMainPage}>Take good care of your small pets</h1>
      {isSmallScreen && <img src={Pets} alt="pets" />}
      {isMediumScreen && <img src={PetsTablet} alt="pets" />}
    </div>
  );
};

export default MainPage;

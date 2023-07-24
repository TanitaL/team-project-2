import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import Pets from '../../../assets/images/bg-pets-mobile-1x-opt.png';
import PetsTablet from '../../../assets/images/bg-pets-tablet-1x-opt.png';
import PetsDesktop from '../../../assets/images/bg-pets-desktop-1x-opt.png';
import css from './MainPage.module.css';

const MainPage = () => {
  const isSmallScreen = useMediaQuery('(max-width: 767px)');
  const isMediumScreen = useMediaQuery(
    '(min-width: 768px) and (max-width: 1279px)'
  );
  const isBigScreen = useMediaQuery('(min-width: 1280px)');

  return (
    <div className={css.bgImgMobile}>
      <h1 className={css.textMainPage}>Take good care of your small pets</h1>
      {isSmallScreen && <img src={Pets} alt="pets" />}
      {isMediumScreen && <img src={PetsTablet} alt="pets" />}
      {isBigScreen && <img src={PetsDesktop} alt="pets" />}
    </div>
  );
};

export default MainPage;

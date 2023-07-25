import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import Pets from '../../../assets/images/bg-pets-mobile-1x-opt.png';
import PetsTablet from '../../../assets/images/bg-pets-tablet-1x-opt.png';
import PetsDesktop from '../../../assets/images/bg-pets-desktop-1x-opt.png';
import css from './MainPage.module.css';
import BgContainer from 'components/Container/BgContainer/BgContainer';

const MainPage = () => {
  const isSmallScreen = useMediaQuery('(max-width: 767px)');
  const isMediumScreen = useMediaQuery(
    '(min-width: 768px) and (max-width: 1279px)'
  );
  const isBigScreen = useMediaQuery('(min-width: 1280px)');

  return (
    <div className={css.bgImg}>
      <BgContainer>
        {isSmallScreen && (
          <>
            <h1 className={css.textMainPage}>
              Take good care of your small pets
            </h1>
            <img src={Pets} alt="pets" />
          </>
        )}

        {isMediumScreen && (
          <>
            <h1 className={css.textMainPage}>
              Take good care of your small pets
            </h1>
            <img src={PetsTablet} alt="pets" />
          </>
        )}

        {isBigScreen && (
          <div className={css.bgWrap}>
            <h1 className={css.textMainPage}>
              Take good care of your small pets
            </h1>
            <img
              src={PetsDesktop}
              alt="pets"
              className={css.imgPets}
              align="right"
            />
          </div>
        )}
      </BgContainer>
    </div>
  );
};

export default MainPage;

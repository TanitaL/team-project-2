import React from 'react';
import Pets from '../../../../assets/images/bg-pets-mobile-1x-cut-opt.png';
import css from './MainPage.module.css';
import Container from 'components/Container/Container';
import AddPetForm from 'components/AddPetForm/AddPetForm/AddPetForm';

const MainPage = () => {
  return (
    <div className={css.bgImgMobile}>
      <Container>
        <h1 className={css.textMainPage}>Take good care of your small pets</h1>
        <AddPetForm/>
      </Container>
      <img src={Pets} alt="pets" />
    </div>
  );
};

export default MainPage;

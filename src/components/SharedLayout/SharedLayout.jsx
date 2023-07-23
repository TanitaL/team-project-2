import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import ContainerHeader from 'components/Container/ContainerHeader';
import { useBurgerContext } from 'context/BurgerProvider';

const SharedLayout = () => {
  const { menuOpen } = useBurgerContext();

  return (
    <div>
      <ContainerHeader>
        <Header />
      </ContainerHeader>
      {!menuOpen && <Outlet />}
    </div>
  );
};

export default SharedLayout;

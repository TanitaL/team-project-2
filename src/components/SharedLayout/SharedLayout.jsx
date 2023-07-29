import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import ContainerHeader from 'components/Container/ContainerHeader/ContainerHeader';
import { useBurgerContext } from 'context/BurgerProvider';
import { ToastContainer } from 'react-toastify';

const SharedLayout = () => {
  const { menuOpen } = useBurgerContext();

  return (
    <div>
      <ContainerHeader>
        <Header />
      </ContainerHeader>

      {!menuOpen && <Outlet />}
      <ToastContainer />
    </div>
  );
};

export default SharedLayout;

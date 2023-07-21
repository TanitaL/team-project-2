import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import ContainerHeader from 'components/Container/ContainerHeader';

const SharedLayout = () => {
  return (
    <div>
      <ContainerHeader>
        <Header />
      </ContainerHeader>
      <Outlet />
    </div>
  );
};

export default SharedLayout;

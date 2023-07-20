import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default SharedLayout;

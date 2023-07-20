import React from 'react';
import Nav from './Nav/Nav';
import AuthNav from './AuthNav/AuthNav';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={css.navigation}>
      <Nav />
      <AuthNav />
    </div>
  );
};

export default Navigation;

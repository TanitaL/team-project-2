import React from 'react';
import { useSelector } from 'react-redux';
import { authSelector } from 'redux/auth/selectors';
// import Nav from './Nav/Nav';
import AuthNav from './AuthNav/AuthNav';
import UserNav from './UserNav/UserNav';
import css from './Navigation.module.css';

const Navigation = () => {
  const isAuth = useSelector(authSelector);

  return (
    <div className={css.navigation}>
      {/* <Nav /> */}
      {!isAuth ? <AuthNav /> : <UserNav />}
    </div>
  );
};

export default Navigation;

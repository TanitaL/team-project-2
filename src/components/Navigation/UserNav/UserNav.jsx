import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector, userSelector } from 'redux/auth/selectors';
import UserBtn from 'components/Buttons/UserBtn/UserBtn';
import Logout from 'components/Logout/Logout';
import css from './UserNav.module.css';
import { useMediaQuery } from '@react-hook/media-query';

const UserNav = ({ closeBurgerMenu }) => {
  const isAuth = useSelector(authSelector);
  const auth = useSelector(userSelector);
  const isMediumScreen = useMediaQuery('(min-width: 768px)');
  const isBigScreen = useMediaQuery('(min-width: 1280px)');

  return (
    <>
      {isAuth && (
        <>
          {isBigScreen && <Logout />}

          <nav className={css.userNav}>
            <NavLink key={'user'} to={'user'}>
              <UserBtn closeBurgerMenu={closeBurgerMenu} />
            </NavLink>
            {isMediumScreen &&
              (auth.name ?? <p className={css.userName}>{auth.name}</p>)}
          </nav>
        </>
      )}
    </>
  );
};

export default UserNav;

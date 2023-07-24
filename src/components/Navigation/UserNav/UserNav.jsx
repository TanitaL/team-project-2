import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector } from 'redux/auth/selectors';
import UserBtn from 'components/Buttons/UserBtn/UserBtn';
import LogoutBtn from 'components/Buttons/LogoutBtn/LogoutBtn';
import Logout from 'components/Logout/Logout';
import css from './UserNav.module.css';

const UserNav = ({ closeBurgerMenu }) => {
  const isAuth = useSelector(authSelector);
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      {isAuth && (
        <>
          <nav className={css.userNav}>
            <NavLink key={'user'} to={'user'}>
              <UserBtn closeBurgerMenu={closeBurgerMenu} />
            </NavLink>

            <NavLink key={'/'} to={'/'} className={css.logoutBtnNav}>
              <LogoutBtn
                closeBurgerMenu={closeBurgerMenu}
                setIsOpenModal={setIsOpenModal}
              />
            </NavLink>
          </nav>
          <Logout isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
        </>
      )}
    </>
  );
};

export default UserNav;

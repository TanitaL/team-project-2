import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import css from './UserNav.module.css';
import UserBtn from 'components/Buttons/UserBtn/UserBtn';
import { useSelector } from 'react-redux';
import { authSelector } from 'redux/auth/selectors';
import LogoutBtn from 'components/Buttons/LogoutBtn/LogoutBtn';
import Logout from 'components/Logout/Logout';
// import { useMediaQuery } from '@react-hook/media-query';

const UserNav = ({ closeBurgerMenu }) => {
  const isAuth = useSelector(authSelector);
  const [isOpenModal, setIsOpenModal] = useState(false);

  //   const isMediumScreen = useMediaQuery(
  //     '(min-width: 768px) and (max-width: 1280px)'
  //   );

  return (
    <div className={css.userNavWrap}>
      {isAuth && (
        <>
          <nav className={css.userNav}>
            <NavLink
              key={'user'}
              to={'user'}
              className={({ isActive }) =>
                isActive ? `${css.active}` : `${css.link}`
              }
            >
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
    </div>
  );
};

export default UserNav;

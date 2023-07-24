import React from 'react';
import { ReactComponent as UserSvg } from '../../../assets/svg/user-btn-header-opt.svg';
import css from './UserBtn.module.css';

const UserBtn = ({ closeBurgerMenu }) => {
  return (
    <button type="button" className={css.userBtn} onClick={closeBurgerMenu}>
      <UserSvg />
    </button>
  );
};

export default UserBtn;

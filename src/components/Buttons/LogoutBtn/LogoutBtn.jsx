import React from 'react';
import { ReactComponent as LogoutSvg } from '../../../assets/svg/logout-opt.svg';
import css from './LogoutBtn.module.css';

const LogoutBtn = ({ setIsOpenModal }) => {
  const handleClick = () => {
    setIsOpenModal(true);
  };

  return (
    <button type="button" className={css.logoutBtn} onClick={handleClick}>
      Log out
      <LogoutSvg />
    </button>
  );
};

export default LogoutBtn;

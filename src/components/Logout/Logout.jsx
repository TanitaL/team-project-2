import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logoutThunk } from 'redux/auth/thunks';
import ModalApproveAction from 'components/Modals/ModalApproveAction/ModalApproveAction';
import { NavLink } from 'react-router-dom';
import LogoutBtn from 'components/Buttons/LogoutBtn/LogoutBtn';
import css from './Logout.module.css';

const Logout = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();

  const handleSuccess = () => {
    dispatch(logoutThunk());
  };

  const handleCancel = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <NavLink key={'/'} to={'/'}>
        <LogoutBtn setIsOpenModal={setIsOpenModal} />
      </NavLink>
      {isOpenModal && (
        <ModalApproveAction
          className={css.logoutModal}
          handleSuccess={handleSuccess}
          handleCancel={handleCancel}
          content={'Already leaving?'}
          successButtonText={'Logout'}
        />
      )}
    </>
  );
};

export default Logout;

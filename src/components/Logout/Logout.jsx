import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logoutThunk } from 'redux/auth/thunks';
import ModalApproveAction from 'components/Modals/ModalApproveAction/ModalApproveAction';
import { NavLink } from 'react-router-dom';
import LogoutBtn from 'components/Buttons/LogoutBtn/LogoutBtn';

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
          handleSuccess={handleSuccess}
          handleCancel={handleCancel}
          content={'Already leaving?'}
          successButtonText={'Yes'}
        />
      )}
    </>
  );
};

export default Logout;

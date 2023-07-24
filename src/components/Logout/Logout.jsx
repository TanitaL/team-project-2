import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutThunk } from 'redux/auth/thunks';
import ModalApproveAction from 'components/Modals/ModalApproveAction/ModalApproveAction';

const Logout = ({ isOpenModal, setIsOpenModal }) => {
  const dispatch = useDispatch();

  const handleSuccess = () => {
    dispatch(logoutThunk());
  };

  const handleCancel = () => {
    setIsOpenModal(false);
  };

  return (
    isOpenModal && (
      <ModalApproveAction
        handleSuccess={handleSuccess}
        handleCancel={handleCancel}
        content={'Already leaving?'}
        successButtonText={'Logout'}
      />
    )
  );
};

export default Logout;

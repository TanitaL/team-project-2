import ModalApproveAction from 'components/Modals/ModalApproveAction/ModalApproveAction';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutThunk } from 'redux/auth/thunks';

const Logout = ({ isOpenModal, setIsOpenModal }) => {
  const dispatch = useDispatch();

  const handleSuccess = () => {
    dispatch(logoutThunk());
  };
  const handleCancel = second => {
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

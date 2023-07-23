import ModalApproveAction from 'components/Modals/ModalApproveAction/ModalApproveAction';
import React from 'react';

const Logout = ({ isLogoutModal }) => {
  const handleSuccess = () => {
    //   third;
  };
  const handleCancel = second => {
    //   third;
  };

  return (
    isLogoutModal && (
      <ModalApproveAction
        handleSuccess={handleSuccess}
        handleCancel={handleCancel}
        content={'Already leaving?'}
      />
    )
  );
};

export default Logout;

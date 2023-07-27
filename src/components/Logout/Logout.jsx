import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { austOperationThunk } from 'redux/auth/thunks';
import ModalApproveAction from 'components/Modals/ModalApproveAction/ModalApproveAction';
import { NavLink } from 'react-router-dom';
import LogoutBtn from 'components/Buttons/LogoutBtn/LogoutBtn';
import { ReactComponent as LogoutSvg } from 'assets/svg/logout-opt.svg';

const Logout = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();

  const handleSuccess = () => {
    dispatch(austOperationThunk({ endpoint: 'logout' }));
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
          successButtonText={
            <>
              <p>Yes</p>
              <LogoutSvg />
            </>
          }
        >
          <div>
            <p>Already leaving?</p>
          </div>
        </ModalApproveAction>
      )}
    </>
  );
};

export default Logout;

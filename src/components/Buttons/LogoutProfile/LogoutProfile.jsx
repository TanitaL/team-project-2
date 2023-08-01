import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { austOperationThunk } from 'redux/auth/thunks';

import ModalApproveAction from 'components/Modals/ModalApproveAction/ModalApproveAction';
import { ReactComponent as LogoutSvg } from 'assets/svg/logout.svg';

import css from 'components/Buttons/LogoutProfile/LogoutProfile.module.css';

const LogoutBtn = ({ setIsOpenModal }) => {
  const handleClick = () => {
    setIsOpenModal(true);
  };

  return (
    <>
      <button type="button" className={css.logoutBtn} onClick={handleClick}>
        <LogoutSvg />
        Log Out
      </button>
    </>
  );
};

const LogoutProfile = ({ closeBurgerMenu }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSuccess = () => {
    dispatch(austOperationThunk({ endpoint: 'logout' }));
    setIsOpenModal(false);
    closeBurgerMenu(false);
    navigate('/notices');
  };

  const handleCancel = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <LogoutBtn setIsOpenModal={setIsOpenModal} />

      {isOpenModal && (
        <ModalApproveAction
          handleSuccess={handleSuccess}
          handleCancel={handleCancel}
          successButtonText={
            <>
              <p>Yes</p>
              <LogoutSvg stroke="#fff" />
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

export default LogoutProfile;

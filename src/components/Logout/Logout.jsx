import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { austOperationThunk } from 'redux/auth/thunks';
import ModalApproveAction from 'components/Modals/ModalApproveAction/ModalApproveAction';
import LogoutBtn from 'components/Buttons/LogoutBtn/LogoutBtn';
import sprite from 'assets/svg/sprite-cards.svg';

const Logout = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSuccess = () => {
    dispatch(austOperationThunk({ endpoint: 'logout' }));

    navigate('/');
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
              <svg width="24" height="24">
                <use href={`${sprite}#icon-logout-white`} />
              </svg>
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

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { austOperationThunk } from 'redux/auth/thunks';
import ModalApproveAction from 'components/Modals/ModalApproveAction/ModalApproveAction';
import LogoutBtn from 'components/Buttons/LogoutBtn/LogoutBtn';
import sprite from 'assets/svg/sprite-cards.svg';
import { toast } from 'react-toastify';
import { errorSelector } from 'redux/auth/selectors';

const Logout = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!error) {
      return;
    }
    const notify = () =>
      toast.error(error.data.message ?? '', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    notify();
  }, [error]);

  const handleSuccess = () => {
    dispatch(austOperationThunk({ endpoint: 'logout' }));
    setIsOpenModal(false);
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

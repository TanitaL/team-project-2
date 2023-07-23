import React from 'react';
import { ReactComponent as CrossBlue } from '../../../assets/svg/cross-blue-mobile-opt.svg';
import css from './ModalApproveAction.module.css';
import { useBurgerContext } from 'context/BurgerProvider';

const ModalApproveAction = () => {
  const { setIsLogoutModal } = useBurgerContext();
  const handleClick = () => {
    setIsLogoutModal(false);
  };

  return (
    <div className={css.modalOverlay}>
      <div className={css.modalContainer}>
        <div className={css.modalHeader}>
          <button type="button" className={css.modalBtn} onClick={handleClick}>
            <CrossBlue />
          </button>
        </div>
        <div className={css.modalBody}>
          <p className={css.modalText}>Already leaving?</p>
          <button type="button" onClick={handleClick}>
            Close
          </button>
          <button type="button">Logout button</button>
        </div>
      </div>
    </div>
  );
};

export default ModalApproveAction;

import React from 'react';
import css from './ModalVerificationEmail.module.css';
import { ReactComponent as CrossBlue } from '../../../assets/svg/cross-blue-mobile-opt.svg';
import PawPrintBtn from 'components/Buttons/PawPrintBtn/PawPrintBtn';

const ModalVerificeteEmail = ({ handleSuccess, handleClose }) => {
  return (
    <div className={css.modalOverlay}>
      <div className={css.modalContainer}>
        <div className={css.modalHeader}>
          <button
            type="button"
            className={css.modalCrossBtn}
            onClick={handleClose}
          >
            <CrossBlue />
          </button>
        </div>
        <div className={css.modalBody}>
          <div className={css.modalText}>
            <h2 className={css.modalTitle}>Congrats!</h2>
            <p className={css.modalInfo}>Your email has been verified</p>
            <div className={css.modalContainerBtn}>
              <PawPrintBtn
                handleSuccess={handleSuccess}
                title={'Go to pets'}
                type={'button'}
              />
            </div>
          </div>
          <div className={css.modalActions}></div>
        </div>
      </div>
    </div>
  );
};

export default ModalVerificeteEmail;

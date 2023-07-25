import React, { useEffect } from 'react';
import { ReactComponent as CrossBlue } from '../../../assets/svg/cross-blue-mobile-opt.svg';
import css from './ModalApproveAction.module.css';

const ModalApproveAction = ({
  content,
  handleCancel,
  handleSuccess,
  successButtonText,
}) => {
  useEffect(() => {
    const handleEscape = ({ code }) => {
      code === 'Escape' && handleCancel();
    };
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [handleCancel]);

  const handleOverlay = event => {
    event.target === event.currentTarget && handleCancel();
  };

  return (
    <div className={css.modalOverlay} onClick={handleOverlay}>
      <div className={css.modalContainer}>
        <div className={css.modalHeader}>
          <button
            type="button"
            className={css.modalCrossBtn}
            onClick={handleCancel}
          >
            <CrossBlue />
          </button>
        </div>
        <div className={css.modalBody}>
          <p className={css.modalText}>{content}</p>
          <button
            type="button"
            onClick={handleCancel}
            className={css.modalCancelBtn}
          >
            Cancel
          </button>
          <button type="button" onClick={handleSuccess}>
            {successButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalApproveAction;

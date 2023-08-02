import React from 'react';
import { Link } from 'react-router-dom';
import css from './WarningModal.module.css';
import sprite from '../../../assets/svg/sprite-cards.svg';


const WarningModal = ({ onClose }) => {
  return (
    <div className={css.modalWarning}>
      <div className={css.modalContent}>
        <button className={css.closeBtn} onClick={onClose}>
          <svg width="20" height="20">
            <use href={`${sprite}#icon-shape`}></use>
          </svg>
        </button>
        <h2 className={css.title}>Attention</h2>
        <p className={css.text}>
          We would like to remind you that certain functionality is available only to authorized users.
          If you have an account, please log in with your credentials.
          If you do not already have an account, you must register to access these features.
        </p>
        <div className={css.buttonWrap}>
          <Link to="/login">
            <button type="button" className={css.loginBtn}>
              Log IN<svg width="24" height="24">
            <use href={`${sprite}#icon-pawprint-lapka`}></use>
          </svg>
            </button>
          </Link>
          <Link to="/register">
          <button type="button" className={css.registrationBtn}>
            Registration
                  </button>
                  </Link>
        </div>
      </div>
    </div>
  );
};

export default WarningModal;

import React from 'react';
import css from './RegisterBtn.module.css';

const RegisterBtn = ({ closeBurgerMenu }) => {
  return (
    <button type="button" className={css.registerBtn} onClick={closeBurgerMenu}>
      Registration
    </button>
  );
};

export default RegisterBtn;

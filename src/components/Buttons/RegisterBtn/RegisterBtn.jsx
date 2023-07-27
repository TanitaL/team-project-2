import React from 'react';
import css from './RegisterBtn.module.css';
import { useBurgerContext } from 'context/BurgerProvider';
import { useNavigate } from 'react-router-dom';

const RegisterBtn = () => {
  const { setMenuOpen } = useBurgerContext();
  const navigate = useNavigate();

  const handleClick = () => {
    setMenuOpen(false);
    navigate('/register');
  };

  return (
    <button type="button" className={css.registerBtn} onClick={handleClick}>
      Registration
    </button>
  );
};

export default RegisterBtn;

import React from 'react';
import { ErrorMessage, useField } from 'formik';
import css from './AuthNavPage.module.css';
import eyeClosedIcon from '../../../assets/svg/register-form-eye-closed.svg';
import crossSmall from '../../../assets/svg/register-form-cross-small.svg';

export const PasswordField = ({ ...props }) => {
  const [field, meta] = useField(props);
  
  const handelChangeTypeInput = e => {
    const inputPassword = document.querySelector('#password');
    const inputConfirmPassword = document.querySelector('#confirmPassword');
    if (e.target.id === 'imgPasswordInput') {
      if (inputPassword.type === 'password') {
        inputPassword.type = 'text';
      } else {
        inputPassword.type = 'password';
      }
    }

    if (e.target.id === 'imgConfirmPasswordInput') {
      if (inputConfirmPassword.type === 'password') {
        inputConfirmPassword.type = 'text';
      } else {
        inputConfirmPassword.type = 'password';
      }
    }
  };

  return (
    <>
      <label htmlFor={field.name} />
      <div
        className={
          meta.touched && meta.error
            ? css.ErrorPasswordInput
            : css.ImputContainer
        }
      >
        <input
          className={css.ContainerForm__Imput_Password}
          autoComplete="off"
          {...field}
          {...props}
        />
        <button
          type="button"
          onClick={meta.touched && meta.error ? null : handelChangeTypeInput}
          className={css.Button__EyeClosedIcon}
        >
          {
            <img
              id="imgPasswordInput"
              src={meta.touched && meta.error ? crossSmall : eyeClosedIcon}
              alt="eyeClosedIcon"
            />
          }
        </button>
      </div>
      <ErrorMessage
        component={'div'}
        name={field.name}
        className={css.ErrorText}
      />
    </>
  );
};

export default PasswordField;

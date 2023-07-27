import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import css from './AuthNavPage.module.css';
import { NavLink } from 'react-router-dom';
import TextField from './TextField';
import PasswordField from './PasswordField';
import { useDispatch } from 'react-redux';
import { austOperationThunk } from 'redux/auth/thunks';
import { useSelector } from 'react-redux';
import { errorSelector } from 'redux/auth/selectors';
import { deletError } from 'redux/auth/slice';

const LoginPage = () => {
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();
  const validate = Yup.object({
    email: Yup.string()
      .required('Email is required')
      .email('Invalid email address'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={(values, actions) => {
        const { email, password } = values;
        dispatch(
          austOperationThunk({
            endpoint: 'login',
            userInfo: {
              email,
              password,
            },
          })
        );
        if (!error) {
          return async () => {
            actions.resetForm();
          };
        }
      }}
    >
      {formik => (
        <div className={css.Container}>
          <div className={css.ContainerForm}>
            <h2 className={css.ContainerForm__Title}>Login</h2>
            <Form className={css.Form} onSubmit={formik.handleSubmit}>
              <TextField
                placeholder="Email"
                name="email"
                id="email"
                type="text"
              />
              <PasswordField
                placeholder="Password"
                name="password"
                id="password"
                type="password"
              />
              {error && <p className={css.ErrorText}>{error.data.message}</p>}
              <button className={css.FormRegister__Button_Login} type="submit">
                Login
              </button>
              <p className={css.FormRegister__Text}>
                Don't have an account?
                <NavLink
                  onClick={() => dispatch(deletError())}
                  to={`/register`}
                  className={css.FormRegister__Link}
                >
                  Register
                </NavLink>
              </p>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default LoginPage;

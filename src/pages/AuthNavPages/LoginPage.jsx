import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import css from './AuthNavPage.module.css';
import { NavLink } from 'react-router-dom';

import { authFetch } from 'service/api/auth';
import TextField from './TextField';
import PasswordField from './PasswordField';

const LoginPage = () => {
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
        authFetch('login', { email, password });
        // actions.resetForm();
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

              <button className={css.FormRegister__Button_Login} type="submit">
                Login
              </button>
              <p className={css.FormRegister__Text}>
                Don't have an account?
                <NavLink to={`/register`} className={css.FormRegister__Link}>
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

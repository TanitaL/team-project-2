import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import css from './AuthNavPage.module.css';
import { NavLink } from 'react-router-dom';

import { authFetch } from 'service/api/auth';
import TextField from './TextField';
import PasswordField from './PasswordField';

const RegisterPage = () => {
  const validate = Yup.object({
    name: Yup.string()
      .required('Name is required')
      .min(2, 'Must be at least 2 characters')
      .max(16, 'Must be 16 characters or less'),
    email: Yup.string()
      .required('Email is required')
      .email('Invalid email address'),
    password: Yup.string()
      .required('Password is required')
      .matches(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,16}$/,
        'Invalid password'
      ),
    confirmPassword: Yup.string()
      .required('Password is required')
      .oneOf([Yup.ref(`password`), null], 'Password must match'),
  });

  console.log(validate);

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validate}
      onSubmit={(values, actions) => {
        const { name, email, password } = values;
        authFetch('register', { name, email, password });

        actions.resetForm();
      }}
    >
      {formik => (
        <div className={css.Container}>
          <div className={css.ContainerForm}>
            <h2 className={css.ContainerForm__Title}>Registration</h2>
            <Form className={css.Form} onSubmit={formik.handleSubmit}>
              <TextField placeholder="Name" name="name" id="name" type="text" />
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
              <PasswordField
                placeholder="Confirm Password"
                name="confirmPassword"
                id="confirmPassword"
                type="password"
              />
              <button className={css.FormRegister__Button} type="submit">
                Registration
              </button>
              <p className={css.FormRegister__Text}>
                Already have an account?{' '}
                <NavLink to={`/login`} className={css.FormRegister__Link}>
                  Login
                </NavLink>
              </p>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default RegisterPage;

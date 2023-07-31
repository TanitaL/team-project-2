import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import css from './AuthNavPage.module.css';
import { NavLink } from 'react-router-dom';
import TextField from './TextField';
import PasswordField from './PasswordField';
import { useDispatch } from 'react-redux';
import { austOperationThunk } from 'redux/auth/thunks';
import { useSelector } from 'react-redux';
import { errorSelector, modalOpenSelector } from 'redux/auth/selectors';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalRegister from 'components/Modals/ModalRegister/ModalRegister';
import BgContainer from 'components/Container/BgContainer/BgContainer';
import Container from 'components/Container/Container/Container';

const RegisterPage = () => {
  const error = useSelector(errorSelector);
  const modalOpen = useSelector(modalOpenSelector);

  const dispatch = useDispatch();

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
      .min(6, 'Password must be at least 6 characters')
      .max(16, 'Password must be at most 16 characters')
      .matches(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,16}$/,
        'The password must consist of numbers and capital letters'
      ),
    confirmPassword: Yup.string()
      .required('Password is required')
      .oneOf([Yup.ref(`password`), null], 'Password must match'),
  });
  useEffect(() => {
    console.log('useEffect');
    if (!error) {
      return;
    }

    const notify = () =>
      toast.error(error.data.message ?? '', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    notify();
  }, [error]);

  return (
    <>
      <BgContainer>
        <Container>
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            validationSchema={validate}
            onSubmit={async (values, actions) => {
              const { name, email, password } = values;

              dispatch(
                austOperationThunk({
                  endpoint: 'register',
                  userInfo: {
                    name,
                    email,
                    password,
                  },
                  actions,
                })
              );
            }}
          >
            {formik => (
              <div className={css.ContainerForm}>
                <h2 className={css.ContainerForm__Title}>Registration</h2>
                <Form className={css.Form} onSubmit={formik.handleSubmit}>
                  <TextField
                    placeholder="Name"
                    name="name"
                    id="name"
                    type="text"
                  />
                  <TextField
                    placeholder="Email"
                    name="email"
                    id="email"
                    type="text"
                  />
                  <PasswordField
                    placeholder="Password"
                    name="password"
                    id="imgPasswordInput"
                    type="password"
                  />
                  <PasswordField
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    id="imgConfirmPasswordInput"
                    type="password"
                  />
                  <button
                    // onClick={setModalOpen}
                    className={css.FormRegister__Button}
                    type="submit"
                  >
                    Registration
                  </button>

                  <p className={css.FormRegister__Text}>
                    Already have an account?{' '}
                    <NavLink to={`/login`} className={css.FormRegister__Link}>
                      Login
                    </NavLink>
                  </p>
                </Form>
                {modalOpen && <ModalRegister />}
              </div>
            )}
          </Formik>
          <ToastContainer />
        </Container>
      </BgContainer>
    </>
  );
};

export default RegisterPage;

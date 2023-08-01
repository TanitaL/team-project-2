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
import { errorSelector, loadingSelector } from 'redux/auth/selectors';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BgContainer from 'components/Container/BgContainer/BgContainer';
import Container from 'components/Container/Container/Container';
import LoaderPet from 'components/LoaderPet/LoaderPet';

const LoginPage = () => {
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();
  const isLoading = useSelector(loadingSelector);
  const validate = Yup.object({
    email: Yup.string()
      .required('Email is required')
      .email('Invalid email address'),
    password: Yup.string().required('Password is required'),
  });
  useEffect(() => {
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
      {isLoading && <LoaderPet />}
      <BgContainer>
        <Container>
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
                  actions,
                })
              );
            }}
          >
            {formik => (
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
                    id="imgPasswordInput"
                    type="password"
                  />
                  <button
                    className={css.FormRegister__Button_Login}
                    type="submit"
                  >
                    Login
                  </button>
                  <p className={css.FormRegister__Text}>
                    Don't have an account?
                    <NavLink
                      to={`/register`}
                      className={css.FormRegister__Link}
                    >
                      Register
                    </NavLink>
                  </p>
                </Form>
              </div>
            )}
          </Formik>
          <ToastContainer />
        </Container>
      </BgContainer>
    </>
  );
};

export default LoginPage;

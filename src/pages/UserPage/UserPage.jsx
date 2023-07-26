import React from 'react';
import Container from 'components/Container/Container';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import LogoutBtn from 'components/Buttons/LogoutBtn/LogoutBtn';
import css from '../UserPage/UserPage.module.css';

const onSubmit = values => {
  console.log(values);
};

const UserPage = () => {
  const validate = Yup.object({
    avatar: Yup.mixed()
      .required('Edit poto')
      .test(
        'fileSize',
        'Photo must be up to 3MB',
        value => value && value.size <= 3000000
      ),
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .required('Email is required')
      .email('Invalid email address'),
    birthday: Yup.string().required('Birthday is required'),
    phone: Yup.string()
      .required('Phone is required')
      .matches(
        /^\+380\d{9}$/,
        'Phone number must be in theformat +380XXXXXXXXX'
      ),
    city: Yup.string().required('City is required'),
  });
  return (
    <Container>
      <div className={css.conteiner}>
        <div className={css.conteinerTitle}>
          <h2 className={css.title}> My information:</h2>
          <Formik
            initialValues={{
              avatar: '',
              name: '',
              email: '',
              birthday: '',
              phone: '',
              city: '',
            }}
            validationSchema={validate}
            onSubmit={onSubmit}
          >
            {({ setFieldValue }) => (
              <Form className={css.section}>
                <div className={css.avatar}>
                  <picture>
                    <img
                      src="/avatar/Photodefault.jpg"
                      alt=""
                      className={css.img}
                    />
                  </picture>

                  {/* <label htmlFor="photo"></label> */}
                  {/* <input
              type="file"
              name="photo"
              id="photo"
              accept="image/*"
              onChange={(event) => {
                setFieldValue("photo", event.currentTarget.files[0]);
              }}
            /> */}
                  <ErrorMessage name="photo" component="div" />
                </div>

                <div className={css.item}>
                  <label htmlFor="name" className={css.label}>
                    Name:{' '}
                  </label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    className={css.input}
                    placeholder="Enter your name"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className={css.ErrorMessage}
                  />
                </div>

                <div className={css.item}>
                  <label htmlFor="email" className={css.label}>
                    Email:{' '}
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className={css.input}
                    placeholder="youremail@gmail.com"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={css.ErrorMessage}
                  />
                </div>

                <div className={css.item}>
                  <label htmlFor="birthday" className={css.label}>
                    Birthday:{' '}
                  </label>
                  <Field
                    type="date"
                    name="birthday"
                    id="birthday"
                    className={css.input}
                    placeholder="00.00.0000"
                  />
                  <ErrorMessage
                    name="birthday"
                    component="div"
                    className={css.ErrorMessage}
                  />
                </div>

                <div className={css.item}>
                  <label htmlFor="phone" className={css.label}>
                    Phone:{' '}
                  </label>
                  <Field
                    type="tel"
                    name="phone"
                    id="phone"
                    className={css.input}
                    placeholder="+380000000000"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className={css.ErrorMessage}
                  />
                </div>

                <div className={css.item}>
                  <label htmlFor="city" className={css.label}>
                    City:{' '}
                  </label>
                  <Field
                    type="text"
                    name="city"
                    id="city"
                    className={css.input}
                    placeholder="Kyiv"
                  />
                  <ErrorMessage
                    name="city"
                    component="div"
                    className={css.ErrorMessage}
                  />
                </div>

                <button src="" type="submit" className={css.button}>
                  Log out
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div className={css.conteinerTitle}>
          <h2 className={css.title}> My pets:</h2>
        </div>
      </div>
    </Container>
  );
};

export default UserPage;

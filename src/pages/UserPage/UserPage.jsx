import { useRef } from 'react';
import Container from 'components/Container/Container';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ReactComponent as LogoutSvg } from '../UserPage/avatar/logout.svg';

import AvatarUpload from './AvatarUpload/AvatarUpload';
import MyPetsList from 'components/Cards/MyPets/MyPetsList/MyPetsList';
import sprite from 'assets/svg/sprite-cards.svg';
import css from '../UserPage/UserPage.module.css';

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
    .matches(/^\+380\d{9}$/, 'Phone number must be in theformat +380XXXXXXXXX'),
  city: Yup.string().required('City is required'),
});

const initialValues = {
  avatar: null,
  name: '',
  email: '',
  birthday: '0000/00/00',
  phone: '+38000000000',
  city: '',
};

const UserPage = () => {
  const fileRef = useRef(null);

  const onSubmit = values => {
    console.log(values);
  };

  const chooseAvatar = () => {
    fileRef.current.click();
  };

  return (
    <Container>
      <div className={css.container}>
        <div>
          <h2 className={css.title}> My information:</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validate}
            onSubmit={onSubmit}
          >
            {({ values, setFieldValue }) => (
              <Form className={css.section}>
                <div className={css.boxInputs}>
                  <div className={css.avatar}>
                    <input
                      ref={fileRef}
                      hidden
                      type="file"
                      name="file"
                      accept="image/jpeg, image/png"
                      onChange={event => {
                        setFieldValue('file', event.target.files[0]);
                      }}
                    />
                    <div className={css.img} onClick={chooseAvatar}>
                      <AvatarUpload file={values.file} />
                    </div>
                    <ErrorMessage name="photo" component="div" />
                  </div>

                  <div className={css.profileInput}>
                    <div className={css.item}>
                      <div className={css.flexContainer}>
                        <label htmlFor="name" className={css.label}>
                          Name:
                        </label>
                        <Field
                          type="text"
                          name="name"
                          id="name"
                          className={css.input}
                          placeholder="Enter your name"
                        />
                      </div>
                      <ErrorMessage
                        name="name"
                        component="div"
                        className={css.ErrorMessage}
                      />
                    </div>

                    <div className={css.item}>
                      <div className={css.flexContainer}>
                        <label htmlFor="email" className={css.label}>
                          Email:
                        </label>
                        <Field
                          type="email"
                          name="email"
                          id="email"
                          className={css.input}
                          placeholder="youremail@gmail.com"
                        />
                      </div>
                      <ErrorMessage
                        name="email"
                        component="div"
                        className={css.ErrorMessage}
                      />
                    </div>

                    <div className={css.item}>
                      <div className={css.flexContainer}>
                        <label htmlFor="birthday" className={css.label}>
                          Birthday:
                        </label>
                        <Field
                          type="date"
                          name="birthday"
                          id="birthday"
                          className={css.input}
                          placeholder="00.00.0000"
                        />
                      </div>
                      <ErrorMessage
                        name="birthday"
                        component="div"
                        className={css.ErrorMessage}
                      />
                    </div>

                    <div className={css.item}>
                      <div className={css.flexContainer}>
                        <label htmlFor="phone" className={css.label}>
                          Phone:
                        </label>
                        <Field
                          type="tel"
                          name="phone"
                          id="phone"
                          className={css.input}
                          placeholder="+380000000000"
                        />
                      </div>
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className={css.ErrorMessage}
                      />
                    </div>

                    <div className={css.item}>
                      <div className={css.flexContainer}>
                        <label htmlFor="city" className={css.label}>
                          City:
                        </label>
                        <Field
                          type="text"
                          name="city"
                          id="city"
                          className={css.input}
                          placeholder="Kyiv"
                        />
                      </div>
                      <ErrorMessage
                        name="city"
                        component="div"
                        className={css.ErrorMessage}
                      />
                    </div>

                    {/* Кнопка Save */}
                    {/* <div className={css.item}>
                      <div className={css.flexContainer}>
                
                        <button type="button" className={css.saveBtn}>
                          Save
                        </button>
                      </div>
                    </div> */}
                  </div>
                </div>

                {/* Кнопки фото редагування  */}
                <div className={css.photoBtns}>
                  {/* Кнопки підтвердження  */}
                  {/* <button type="button" className={css.confirmBtn}>
                    <svg width="24" height="24">
                      <use href={`${sprite}#icon-confirm`}></use>
                    </svg>
                  </button>
                  <p>Confirm</p>
                  <button type="button" className={css.confirmBtn}>
                    <svg width="24" height="24">
                      <use href={`${sprite}#icon-unconfirm`}></use>
                    </svg>
                  </button> */}

                  {/* Кнопка Edit photo  */}
                  <button type="button" className={css.editPhotoBtn}>
                    <svg width="24" height="24">
                      <use href={`${sprite}#icon-camera`}></use>
                    </svg>
                    Edit photo
                  </button>
                </div>

                {/* Кнопка редагування  */}
                <button type="button" className={css.editBtn}>
                  <svg width="24" height="24">
                    <use href={`${sprite}#icon-edit-2`}></use>
                  </svg>
                </button>

                {/* Кнопка Log Out  */}
                <button type="button" className={css.logoutBtn}>
                  <LogoutSvg />
                  Log Out
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div className={css.petListBox}>
          <h2 className={css.title}> My pets:</h2>
          <MyPetsList />
        </div>
      </div>
    </Container>
  );
};

export default UserPage;

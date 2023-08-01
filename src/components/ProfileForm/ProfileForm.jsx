import { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import AvatarUpload from 'components/ProfileForm/AvatarUpload/AvatarUpload';
import LogoutProfile from 'components/Buttons/LogoutProfile/LogoutProfile';
import Loader from 'components/Loader/Loader';

import { instance } from 'service/api/api';
import notify from 'service/addPetHelpers/toast';
import preparePutData from 'service/addPetHelpers/preparePutData';

import { ReactComponent as CloseSvg } from 'assets/svg/close.svg';
import { ReactComponent as EditSvg } from 'assets/svg/edit.svg';
import css from 'components/ProfileForm/ProfileForm.module.css';

const validate = Yup.object({
  avatar: Yup.mixed().test(
    'fileSize',
    'Photo must be up to 3MB',
    value => value?.size <= 3000000 || true
  ),
  name: Yup.string()
    .min(2, 'Must be at least 2 letters')
    .max(16, 'Must be less than 16 letters')
    .required('Name is required'),
  email: Yup.string()
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Invalid email address'
    )
    .required('Email is required'),
  birthday: Yup.string()
    .matches(/^\d{2}-\d{2}-\d{4}$/, 'Invalid date')
    .test(
      'date',
      "Birthday couldn't be in the future",
      value =>
        new Date() - new Date(value?.split('-').reverse().join('/')) >= 0 ||
        true
    ),
  phone: Yup.string().matches(
    /^\+380\d{9}$/,
    'Phone number must be in theformat +380XXXXXXXXX'
  ),
  city: Yup.string()
    .min(2, 'Must be at least 2 letters')
    .matches(/^[a-zA-Z]+$/, 'Ivalid city'),
});

const initialValues = {
  avatar: null,
  name: '',
  email: '',
  birthday: '',
  phone: '',
  city: '',
};

const EditCloseBtn = ({ handleOnClick }) => {
  return (
    <button type="button" className={css.editBtn} onClick={handleOnClick}>
      <CloseSvg />
    </button>
  );
};

const EditBtn = ({ handleOnClick }) => {
  return (
    <button type="button" className={css.editBtn} onClick={handleOnClick}>
      <EditSvg />
    </button>
  );
};

const SaveBtn = () => {
  return (
    <button type="submit" className={css.saveBtn}>
      Save
    </button>
  );
};

const ProfileForm = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(initialValues);
  const [isUserDataPending, setIsUserDataPending] = useState(true);
  const [errorUserData, setErrorUserData] = useState('');

  const handleOnEdit = () => {
    setIsEditing(true);
  };

  const handleOnEditClose = resetForm => {
    return () => {
      setIsEditing(false);
      resetForm();
    };
  };

  const onSubmit = async values => {
    setIsUserDataPending(true);
    try {
      const { avatar, ...putData } = values;
      const { data } = await instance.put('/users', preparePutData(putData));
      setUserData(prev => ({ ...prev, ...data.user }));
      if (avatar && typeof avatar !== 'string') {
        const formData = new FormData();
        formData.append('avatar', avatar);
        const { data } = await instance.put('/users/avatar', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        const { avatar: newAvatar } = data;
        setUserData(prev => ({ ...prev, avatar: newAvatar }));
      }
    } catch (error) {
      const { message } = error.response.data;
      notify.error(message);
    } finally {
      setIsEditing(false);
      setIsUserDataPending(false);
    }
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const { data } = await instance.get(`/users/current`);
        setUserData(prev => ({ ...prev, ...data.user }));
      } catch (error) {
        const { message } = error.response.data;
        notify.error(message);
        setErrorUserData(message);
      } finally {
        setIsUserDataPending(false);
      }
    };

    getUserData();
  }, []);

  if (isUserDataPending) {
    return (
      <>
        <Loader />
      </>
    );
  }

  if (errorUserData) {
    return (
      <>
        <p className={css.centerError}>Error: {errorUserData}</p>
      </>
    );
  }

  return (
    <Formik
      initialValues={userData}
      validationSchema={validate}
      onSubmit={onSubmit}
    >
      {({ values, setFieldValue, resetForm }) => (
        <Form className={css.section}>
          <div className={css.boxInputs}>
            <div className={css.avatar}>
              <AvatarUpload
                userFile={userData.avatar}
                isEditing={isEditing}
                setImage={value => setFieldValue('avatar', value)}
              />
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
                    disabled={!isEditing}
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
                    disabled={!isEditing}
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
                    type="text"
                    onFocus={e => (e.target.type = 'date')}
                    onBlur={e => (e.target.type = 'text')}
                    name="birthday"
                    id="birthday"
                    className={css.input}
                    disabled={!isEditing}
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
                    disabled={!isEditing}
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
                    disabled={!isEditing}
                    placeholder="Kyiv"
                  />
                </div>
                <ErrorMessage
                  name="city"
                  component="div"
                  className={css.ErrorMessage}
                />
              </div>

              {/* Кнопка Save  */}
              {isEditing && (
                <div className={css.item}>
                  <div className={css.flexContainer}>
                    <SaveBtn />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Загальне редагування  */}
          {!isEditing && <EditBtn handleOnClick={handleOnEdit} />}
          {isEditing && (
            <EditCloseBtn handleOnClick={handleOnEditClose(resetForm)} />
          )}

          {/* Кнопка Log out */}
          {!isEditing && <LogoutProfile />}
        </Form>
      )}
    </Formik>
  );
};

export default ProfileForm;

import css from './AuthNavPage.module.css';

import { Formik, Form } from 'formik';
import TextField from './TextField';
import PasswordField from './PasswordField';

import { austOperationThunk } from 'redux/auth/thunks';
import { useSelector } from 'react-redux';
import {
  errorSelector,
  loadingSelector,
  modalOpenSelector,
} from 'redux/auth/selectors';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ModalRegister from 'components/Modals/ModalRegister/ModalRegister';

import BgContainer from 'components/Container/BgContainer/BgContainer';
import Container from 'components/Container/Container/Container';

import LoaderPet from 'components/LoaderPet/LoaderPet';

import {
  validateInRegisterForm,
  validateInLoginForm,
} from '../../service/ValidateInForm/ValidateInForm';
import notify from 'service/addPetHelpers/toast';

export {
  css,
  Formik,
  Form,
  TextField,
  PasswordField,
  austOperationThunk,
  useSelector,
  errorSelector,
  loadingSelector,
  modalOpenSelector,
  ToastContainer,
  ModalRegister,
  BgContainer,
  Container,
  LoaderPet,
  validateInRegisterForm,
  validateInLoginForm,
  notify,
};

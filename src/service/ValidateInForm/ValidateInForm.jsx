import * as Yup from 'yup';

export const validateInRegisterForm = Yup.object({
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

export const validateInLoginForm = Yup.object({
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  password: Yup.string().required('Password is required'),
});
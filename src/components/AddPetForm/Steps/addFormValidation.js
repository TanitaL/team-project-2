import * as Yup from 'yup';

const petCategory = ['your pet', 'sell', 'lost/found', 'in good hands'];

export const stepOneValidationSchema = Yup.object().shape({
  category: Yup.string()
    .required('Category is required')
    .oneOf(petCategory, 'Invalid category selected'),
  first_name: Yup.string().required('first_name is required'),
  last_name: Yup.string().required('last_name is required'),
});

export const stepTwoValidationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  name: Yup.string().required('Pet name is required'),
  date: Yup.string()
    .matches(
      /^(0?[1-9]|[12][0-9]|3[01])-(0?[1-9]|1[0-2])-\d{4}$/,
      'Birth date must be in the format DD-MM-YYYY'
    )
    .required('Birth date is required'),
  type: Yup.string().required('Type is required'),
});

export const stepThreeValidationSchema = Yup.object().shape({
  location: Yup.string().required('location is required'),
  price: Yup.string().required('location is required'),
  comments: Yup.string().max(120, 'Comments cannot exceed 120 characters.'),
});

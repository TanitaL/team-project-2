import { ErrorMessage, Field, Form, Formik } from 'formik';
import { stepTwoValidationSchema } from './addFormValidation';
import css from './steps.module.css';

const PersonalDetails = ({
  errors,
  values,
  handleChange,
  data,
  next,
  prev,
}) => {
  const handleSubmit = (values, helpers) => {
    next(values);
  };

  return (
    <Formik
      initialValues={data}
      onSubmit={handleSubmit}
      validationSchema={stepTwoValidationSchema}
    >
      {({ values }) => (
        <Form className={css.wrapper}>
          <div className={css.inptWrapper}>
            <label className={css.lable} htmlFor="title">
              Title of add
            </label>
            <Field
              className={css.input}
              name="title"
              placeholder="Title of add"
            />
            <ErrorMessage name="title" component="div" />
          </div>
          <div className={css.inptWrapper}>
            <label className={css.lable} htmlFor="name">
              Pet’s name
            </label>
            <Field
              className={css.input}
              name="name"
              placeholder="Type name pet"
            />
            <ErrorMessage name="name" component="div" />
          </div>
          <div className={css.inptWrapper}>
            <label className={css.lable} htmlFor="date">
              Date of birth
            </label>
            <Field
              className={css.input}
              name="date"
              type="data"
              placeholder="Type date of birth"
            />
            <ErrorMessage name="data" component="div" />
          </div>
          <div className={css.inptWrapper}>
            <label className={css.lable} htmlFor="type">
              Type
            </label>
            <Field
              className={css.input}
              name="type"
              placeholder="Type of pet"
            />
            <ErrorMessage name="type" component="div" />
          </div>
          <button type="button" onClick={() => prev(values)}>
            Back
          </button>
          <button type="submit">Next</button>
        </Form>
      )}
    </Formik>
  );
};

export default PersonalDetails;

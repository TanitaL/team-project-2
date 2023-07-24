import PawPrintBtn from 'components/Buttons/PawPrintBtn/PawPrintBtn';
import { petCategory } from 'constants/petCategory';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { stepThreeValidationSchema } from './addFormValidation';
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';
import css from './steps.module.css';
import ArrowLeftBtn from 'components/Buttons/ArrowLeftBtn/ArrowLeftBtn';

const MoreInfo = ({ errors, values, handleChange, data, next, prev }) => {
  const handleSubmit = (values, helpers) => {
    next(values, true);
  };

  const handleBackClick = values => {
    prev(values);
  };

  return (
    <Formik
      initialValues={data}
      onSubmit={handleSubmit}
      validationSchema={stepThreeValidationSchema}
    >
      {({ values }) => (
        <Form className={css.wrapper}>
          {values.category !== petCategory[0] && (
            <div
              className={css.genderWrapper}
              role="group"
              aria-labelledby="my-radio-group"
            >
              <Field
                className="visually-hidden"
                type="radio"
                name="sex"
                value="female"
                id="female"
              />
              <label htmlFor="female" className={css.gender}>
                <BsGenderFemale className={css.iconFemale} size="24px" />
                <span className={css.genderText}>Female</span>
              </label>
              <Field
                className="visually-hidden"
                type="radio"
                name="sex"
                value="male"
                id="male"
              />
              <label htmlFor="male" className={css.gender}>
                <BsGenderMale size="24px" className={css.iconMale} />
                <span className={css.genderText}>Male</span>
              </label>
              <ErrorMessage className={css.error} name="sex" component="div" />
            </div>
          )}
          <ErrorMessage className={css.error} name="sex" component="div" />
          {values.category !== petCategory[0] && (
            <div className={css.inptWrapper}>
              <label className={css.label} htmlFor="location">
                Location
              </label>
              <Field className={css.input} name="location" />
              <ErrorMessage
                className={css.error}
                name="location"
                component="div"
              />
            </div>
          )}
          <ErrorMessage className={css.error} name="location" component="div" />
          {values.category === petCategory[1] && (
            <div className={css.inptWrapper}>
              <label className={css.label} htmlFor="price">
                Price
              </label>
              <Field className={css.input} name="price" />
              <ErrorMessage
                className={css.error}
                name="price"
                component="div"
              />
            </div>
          )}
          <ErrorMessage className={css.error} name="price" component="div" />
          <div className={css.inptWrapper}>
            <label className={css.label} htmlFor="comments">
              Comments
            </label>
            <Field className={css.textarea} name="comments" as="textarea" />
            <ErrorMessage
              className={css.error}
              name="comments"
              component="div"
            />
          </div>{' '}
          <ErrorMessage className={css.error} name="comments" component="div" />
          {/* <button type="button" onClick={() => prev(values)}>
            Back
          </button> */}
          <PawPrintBtn title="Done" type="submit" />
          <ArrowLeftBtn
            title="Back"
            type="button"
            handleBackClick={handleBackClick}
          />
          {/* <button type="submit">Next</button> */}
        </Form>
      )}
    </Formik>
  );
};

export default MoreInfo;

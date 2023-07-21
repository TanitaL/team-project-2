import { Field, Form, Formik } from 'formik';
import css from "./steps.module.css"

const MoreInfo = ({ errors, values, handleChange, data, next, prev }) => {
  const handleSubmit = (values, helpers) => {
    next(values, true);
  };

  return (
    <Formik initialValues={data} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form className={css.wrapper}>
          <div className={css.inptWrapper}>
            <label className={css.label} htmlFor="location">Location</label>
            <Field className={css.input} name="location" />
          </div>
          <div className={css.inptWrapper}>
            <label className={css.label} htmlFor="price">Price</label>
            <Field className={css.input} name="price" />
          </div>
          <div className={css.inptWrapper}>
            <label className={css.label} htmlFor="comments">Comments</label>
            <Field className={css.input} name="comments" as="textarea" />
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

export default MoreInfo;

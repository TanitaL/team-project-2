import { Field, Form, Formik } from 'formik';
import css from './steps.module.css';

const petCategory = ['your pet', 'sell', 'lost/found', 'in good hands'];

const ChooseOption = ({ data, next }) => {
  const handleSubmit = (values, helpers) => {
    next(values);
  };

  return (
    <Formik initialValues={data} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form>
          <div
            className={css.radioWrap}
            role="group"
            aria-labelledby="my-radio-group"
          >
            {petCategory.map(category => {
              return (
                <label className={css.btn} key={category}>
                  <Field
                    className="visually-hidden"
                    type="radio"
                    name="category"
                    value={category}
                  />
                  {category}
                </label>
              );
            })}
          </div>
          <button type="button">Cansel</button>
          <button type="submit">Next</button>
        </Form>
      )}
    </Formik>
  );
};

export default ChooseOption;

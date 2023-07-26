import ArrowLeftBtn from 'components/Buttons/ArrowLeftBtn/ArrowLeftBtn';
import PawPrintBtn from 'components/Buttons/PawPrintBtn/PawPrintBtn';
import { petCategory } from 'constants/petCategory';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { stepTwoValidationSchema } from './addFormValidation';
import css from './steps.module.css';
import TextField from './TextFielf';

// import { DatePicker } from 'react-datepicker'; // Импортируем компонент DatePicker
// import 'react-datepicker/dist/react-datepicker.css'; // Подключаем стили для DatePicker
// import { parse, format } from 'date-fns'; // Импортируем функции для работы с датами

// const formatDateForFormik = date => {
//   return date ? format(date, 'dd-MM-yyyy') : '';
// };

const PersonalDetails = ({ data, next, prev }) => {
  const handleSubmit = (values, helpers) => {
    next(values);
  };

  const handleBackClick = values => {
    prev(values);
  };

  return (
    <Formik
      initialValues={data}
      onSubmit={handleSubmit}
      validationSchema={stepTwoValidationSchema}
    >
      {({ values, setFieldValue, touched, errors }) => (
        <Form className={css.wrapper}>
          {values.category !== petCategory[0] && (
            <div className={css.inptWrapper}>
              <label className={css.lable} htmlFor="title">
                Title of add
              </label>
              <TextField
                placeholder="Title of add"
                name="title"
                id="title"
                type="text"
              />
              {/* <Field
                className={css.input}
                name="title"
                placeholder="Title of add"
              />
              <ErrorMessage
                className={css.error}
                name="title"
                component="div"
              /> */}
            </div>
          )}

          <div className={css.inptWrapper}>
            <label className={css.lable} htmlFor="name">
              Pet’s name
            </label>
            <TextField
              placeholder="Type name pet"
              name="name"
              id="name"
              type="text"
            />
            {/* <Field
              className={css.input}
              name="name"
              placeholder="Type name pet"
            />
            <ErrorMessage className={css.error} name="name" component="div" /> */}
          </div>
          <div className={css.inptWrapper}>
            <label className={css.lable} htmlFor="date">
              Date of birth
            </label>
            <Field
              className={css.input}
              name="date"
              type="date"
              placeholder="Type date of birth"
            />
            {/* <DatePicker
              selected={
                values.date
                  ? parse(values.date, 'dd-MM-yyyy', new Date())
                  : null
              }
              dateFormat="dd-MM-yyyy"
              className={css.input}
              name="date"
              placeholderText="Type date of birth"
              onChange={date => {
                // При изменении даты обновляем значение в Formik
                setFieldValue('date', formatDateForFormik(date));
              }}
            /> */}
            <ErrorMessage className={css.error} name="date" component="div" />
          </div>
          <div className={css.inptWrapper}>
            <label className={css.lable} htmlFor="type">
              Type
            </label>
            <TextField
              placeholder="Type of pet"
              name="type"
              id="type"
              type="text"
            />
            {/* <Field
              className={css.input}
              name="type"
              type="text"
              placeholder="Type of pet"
            />
            <ErrorMessage className={css.error} name="type" component="div" /> */}
          </div>
          <div className={css.btnWrapper}>
            <PawPrintBtn title="Next" type="submit" />
            <ArrowLeftBtn
              title="Back"
              type="button"
              handleBackClick={handleBackClick}
            />
          </div>

          {/* <button type="submit">Next</button> */}
          {/* <button type="button" onClick={handleBackClick}>
            Back
          </button> */}
        </Form>
      )}
    </Formik>
  );
};

export default PersonalDetails;

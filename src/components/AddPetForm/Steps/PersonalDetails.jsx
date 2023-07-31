import ArrowLeftBtn from 'components/Buttons/ArrowLeftBtn/ArrowLeftBtn';
import PawPrintBtn from 'components/Buttons/PawPrintBtn/PawPrintBtn';
import { petCategory } from 'constants/petCategory';
import { ErrorMessage, Form, Formik, Field } from 'formik';
import { stepTwoValidationSchema } from './addFormValidation';
import css from './steps.module.css';
import TextField from './TextFielf';

// import { DatePicker } from 'react-datepicker'; // Импортируем компонент DatePicker
// import 'react-datepicker/dist/react-datepicker.css'; // Подключаем стили для DatePicker

// import { format } from 'date-fns'; // Импортируем функции для работы с датами

// const formatDateForFormik = date => {
//   return date ? format(date, 'dd-MM-yyyy') : '';
// };

// const formatDate = date => {
//   const formattedDate = date ? format(new Date(date), 'dd-MM-yyyy') : null;

//   return formattedDate;
// };

const PersonalDetails = ({ data, next, prev }) => {
  const handleSubmit = values => {
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
            {/* <input
              className={css.input}
              name="date"
              type="date"
              placeholder="Type date of birth"
              onChange={event => {
                // setFieldValue('date', formatDate(event.target.value));
                setFieldValue(
                  'date',
                  new Date(event.target.value).toISOString()
                );
              }}
            /> */}
            {/* <DatePicker
              autoComplete="off"
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
                console.log('🚀 ~ DatePicker ~ date:', date);
                // При изменении даты обновляем значение в Formik
                setFieldValue('date', date);
                // setFieldValue('date', formatDateForFormik(date));
              }}
            /> */}
            <ErrorMessage className={css.error} name="date" component="div" />
          </div>
          <div className={css.inptWrapper}>
            <label className={css.lable} htmlFor="typePet">
              Type
            </label>
            <TextField
              placeholder="Type of pet"
              name="typePet"
              id="typePet"
              type="text"
            />
          </div>
          <div className={css.btnWrapper}>
            <PawPrintBtn title="Next" type="submit" />
            <ArrowLeftBtn
              title="Back"
              type="button"
              handleBackClick={handleBackClick}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default PersonalDetails;

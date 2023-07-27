import PawPrintBtn from 'components/Buttons/PawPrintBtn/PawPrintBtn';
import { petCategory } from 'constants/petCategory';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { stepThreeValidationSchema } from './addFormValidation';
import { BsGenderFemale, BsGenderMale, BsPlusLg } from 'react-icons/bs';
import { BiEditAlt } from 'react-icons/bi';
import css from './steps.module.css';
import ArrowLeftBtn from 'components/Buttons/ArrowLeftBtn/ArrowLeftBtn';
import { useRef } from 'react';
import PreviewImage from 'components/PreviewImage/PreviewImage';

const MoreInfo = ({ data, next, prev }) => {
  const fileRef = useRef(null);

  const handleSubmit = (values, helpers, actions) => {
    next(values, true, actions);
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
      {({ values, setFieldValue }) => (
        <Form className={css.moreInfoWrapper}>
          <div
            className={
              data.category === petCategory[0]
                ? css.fieldContainer
                : css.notMyPetfieldContainer
            }
          >
            <div className={css.radioAndFileWrapper}>
              {values.category !== petCategory[0] && (
                <>
                  {/* <p className={css.lable}>The Sex</p> */}
                  <div
                    className={css.genderWrapper}
                    role="group"
                    aria-labelledby="my-radio-group"
                  >
                    <label className={css.lable} htmlFor="sex">
                      The Sex
                    </label>
                    <div className={css.radioWrapper}>
                      <Field
                        className="visually-hidden"
                        type="radio"
                        name="sex"
                        value="female"
                        id="female"
                      />
                      <label htmlFor="female" className={css.gender}>
                        <BsGenderFemale
                          className={css.iconFemale}
                          size="24px"
                        />
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
                    </div>
                    <ErrorMessage
                      className={css.error}
                      name="sex"
                      component="div"
                    />
                  </div>
                </>
              )}
              <div
                className={
                  data.category === petCategory[0]
                    ? css.myPetInfoWrap
                    : css.infoWrap
                }
              >
                <div
                  className={
                    data.category === petCategory[0]
                      ? css.addImgWrapper
                      : css.notMyPetaddImgWrapper
                  }
                >
                  <input
                    ref={fileRef}
                    hidden
                    type="file"
                    // name="file"
                    onChange={event => {
                      setFieldValue('file', event.target.files[0]);
                    }}
                  />
                  <label className={css.lable}>Add photo</label>

                  <button
                    className={css.addImgBtn}
                    type="button"
                    onClick={() => {
                      fileRef.current.click();
                    }}
                  >
                    {!values.file && <BsPlusLg color="#54ADFF" size="30px" />}
                    {values.file && (
                      <>
                        <PreviewImage
                          file={values.file}
                          width="112"
                          height="112"
                        />
                        <BiEditAlt
                          color="#54ADFF"
                          className={css.editIcon}
                          size="30px"
                        />
                      </>
                    )}
                  </button>
                </div>
                <ErrorMessage
                  className={css.error}
                  name="file"
                  component="div"
                />
              </div>
            </div>

            <div className={css.textInputsWrapper}>
              {values.category !== petCategory[0] && (
                <div className={css.inptWrapper}>
                  <label className={css.lable} htmlFor="location">
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
              {values.category === petCategory[1] && (
                <div className={css.inptWrapper}>
                  <label className={css.lable} htmlFor="price">
                    Price
                  </label>
                  <Field className={css.input} name="price" type="number" />
                  <ErrorMessage
                    className={css.error}
                    name="price"
                    component="div"
                  />
                </div>
              )}
              {/* <ErrorMessage className={css.error} name="price" component="div" /> */}
              <div className={css.inptWrapper}>
                <label className={css.lable} htmlFor="comments">
                  Comments
                </label>
                <Field className={css.textarea} name="comments" as="textarea" />
                <ErrorMessage
                  className={css.error}
                  name="comments"
                  component="div"
                />
              </div>
            </div>
          </div>
          {/* <button type="button" onClick={() => prev(values)}>
            Back
          </button> */}
          <div className={css.btnWrapper}>
            <PawPrintBtn title="Done" type="submit" />
            <ArrowLeftBtn
              title="Back"
              type="button"
              handleBackClick={handleBackClick}
            />
          </div>
          {/* <button type="submit">Next</button> */}
        </Form>
      )}
    </Formik>
  );
};

export default MoreInfo;

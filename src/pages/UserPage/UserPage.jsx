import React from 'react';
import Container from 'components/Container/Container';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from '../UserPage/UserPage.module.css';

const initialValues = {
  name: '',
  email: '',
  birthday: '',
  phone: '',
  city: '',
  photo: null,
  
};

const onSubmit = (values) => {
 
  console.log(values);
};

const UserPage = () => {
  return (
    <Container>
      <div className={css.conteiner}>
      <div className={css.conteinerTitle}>
      <h2 className={css.title}> My information:</h2>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ setFieldValue }) => (
        <Form className={css.section}>
          {/* <div>
            <label htmlFor="photo"></label>
            <input
              type="file"
              name="photo"
              id="photo"
              accept="image/*"
              onChange={(event) => {
                setFieldValue("photo", event.currentTarget.files[0]);
              }}
            />
            <ErrorMessage name="photo" component="div" />
          </div> */}
          <div className={css.item}>
            <label htmlFor="name" className={css.label}>Name: </label>
            <Field type="text" name="name" id="name" className={css.input} placeholder="Enter your name"/>
            <ErrorMessage name="name" component="div" />
          </div>

          <div className={css.item}>
            <label htmlFor="email" className={css.label}>Email: </label>
            <Field type="email" name="email" id="email" className={css.input} placeholder="youremail@gmail.com"/>
            <ErrorMessage name="email" component="div" />
          </div>

          <div className={css.item}>
            <label htmlFor="birthday" className={css.label}>Birthday: </label>
            <Field type="date" name="birthday" id="birthday" className={css.input} placeholder="00.00.0000"/>
            <ErrorMessage name="birthday" component="div" />
          </div>

          <div className={css.item}>
            <label htmlFor="phone" className={css.label}>Phone: </label>
            <Field type="tel" name="phone" id="phone" className={css.input} placeholder="+380000000000"/>
            <ErrorMessage name="phone" component="div" />
          </div>

          <div className={css.item}>
            <label htmlFor="city" className={css.label}>City: </label>
            <Field type="text" name="city" id="city" className={css.input} placeholder="your city"/>
            <ErrorMessage name="city" component="div" />
          </div>

          <button type="submit" className={css.button}>Log out</button>
        </Form>
      )}
    </Formik>
    </div>
    <div className={css.conteinerTitle}>
    <h2 className={css.title}> My pets:</h2>
    </div>
    </div>
    </Container>
   );
};

export default UserPage;

 


// const UserPage = () => {
//     const  formik = useFormik({
//         initialValues: {
//             name: '',
//             email: '',
//             birthday: '',
//             phone: '', 
//             city: '',
//             photo: '',
//             refresh: '',
//         }
//     });
//   return (
//     <Container >
//         <h2 className={css.title}>My information:</h2>

//     <form onSubmit={formik.handleSubmit} className={css.section}>
    
//        <ul>
//         <li><label htmlFor="name" className={css.label}>Name:</label>
//        <input className={css.input}
//          id="name"
//          name="name"
//          type="text"
//          placeholder="Enter your name"
//          onChange={formik.handleChange}
//          value={formik.values.name}
//        /> </li>
//        <li><label htmlFor="email" className={css.label}>Email:</label>
//        <input className={css.input}
//          id="email"
//          name="email"
//          type="text"
//          placeholder="youremail@gmail.com"
//          onChange={formik.handleChange}
//          value={formik.values.email}
//        /></li>
//        <li><label htmlFor="birthday" className={css.label}>Birthday:</label>
//        <input className={css.input}
//          id="birthday"
//          name="birthday"
//          type="date"
//          placeholder="00.00.0000"
//          onChange={formik.handleChange}
//          value={formik.values.birthday}
//        /></li>
//        <li><label htmlFor="phone" className={css.label}>Phone:</label>
//        <input className={css.input}
//          id="phone"
//          name="phone"
//          type="tel"
//          placeholder="+380000000000"
//          onChange={formik.handleChange}
//          value={formik.values.phone}
//        /></li>
//        <li><label htmlFor="city" className={css.label}>City:</label>
//        <input className={css.input}
//          id="city"
//          name="city"
//          type="text"
//          placeholder="your city"
//          onChange={formik.handleChange}
//          value={formik.values.city}
//        /></li>
//        </ul>
//        {/* <button type="submit">Log Out</button> */}
//      </form>
     
//      </Container>
//   );
// };

// export default UserPage;

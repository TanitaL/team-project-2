import React from 'react';
import { useFormik } from 'formik';
import css from '../UserData/UserData.module.css'

const UserData = () => {
    const  formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            birthday: '',
            phone: '', 
            city: '',
            photo: '',
            refresh: '',
        }
    });
  return (
    <div >
        <h2 className={css.title}>My information:</h2>
    <form onSubmit={formik.handleSubmit} className={css.section}>
       <ul>
        <li><label htmlFor="name" className={css.label}>Name:</label>
       <input className={css.input}
         id="name"
         name="name"
         type="text"
         placeholder="Enter your name"
         onChange={formik.handleChange}
         value={formik.values.name}
       /> </li>
       <li><label htmlFor="email" className={css.label}>Email:</label>
       <input className={css.input}
         id="email"
         name="email"
         type="text"
         placeholder="youremail@gmail.com"
         onChange={formik.handleChange}
         value={formik.values.email}
       /></li>
       <li><label htmlFor="birthday" className={css.label}>Birthday:</label>
       <input className={css.input}
         id="birthday"
         name="birthday"
         type="date"
         placeholder="00.00.0000"
         onChange={formik.handleChange}
         value={formik.values.birthday}
       /></li>
       <li><label htmlFor="phone" className={css.label}>Phone:</label>
       <input className={css.input}
         id="phone"
         name="phone"
         type="tel"
         placeholder="+380000000000"
         onChange={formik.handleChange}
         value={formik.values.phone}
       /></li>
       <li><label htmlFor="city" className={css.label}>City:</label>
       <input className={css.input}
         id="city"
         name="city"
         type="text"
         placeholder="your city"
         onChange={formik.handleChange}
         value={formik.values.city}
       /></li>
       </ul>
       <button type="submit">Log Out</button>
     </form>
     
     </div>
  );
};

export default UserData;




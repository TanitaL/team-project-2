import { ErrorMessage, Field } from 'formik';
import React from 'react';
// import DatePicker from 'react-datepicker';
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DataPicker(props) {
  const { lable, name, ...rest } = props;
  return (
    <div className="form-control">
      <lable htmlFor={name}>{lable}</lable>
      <Field name={name}>
        {({ form, field }) => {
          const { setFildValue } = form;
          const { value } = field;
          return (
            <DateView
              id={name}
              {...field}
                  {...rest}
                  selected={value}
              onChange={val => setFildValue(name, val)}
            />
          );
        }}
          </Field>
          <ErrorMessage name={name} component="div" />
    </div>
  );
}

export default DataPicker;

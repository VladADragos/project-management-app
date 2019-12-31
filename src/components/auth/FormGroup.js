import React from 'react';
import { Field } from 'formik';
export default function FormGroup({ name, labelText, type }) {
  return (
    <div className='form-group'>
      <label className='label' htmlFor={name}>
        {labelText ? labelText : name}
      </label>
      <Field className='input' name={name} type={type} />
    </div>
  );
}

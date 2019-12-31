import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
import FormGroup from '../FormGroup';

export default function SignUpForm() {
  const initialValues = {
    username: '',
    password: '',
    confirmPassword: ''
  };
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Formik initialValues={initialValues} onSubmit={data => handleSubmit(data)}>
      {() => (
        <Form className='form'>
          <h1 className='login-header'>Sign up</h1>
          <FormGroup name='username' type='input' />
          <FormGroup name='password' type='password' />
          <FormGroup
            name='confirmPassword'
            labelText='confirm password'
            type='password'
          />
          <div className='form-bottom'>
            <button type='submit' className='button button--login'>
              Sign up
            </button>
            <span className='form-bottom-text'>
              or{' '}
              <Link className='link' to='/sign-up'>
                Login
              </Link>
            </span>
          </div>
        </Form>
      )}
    </Formik>
  );
}

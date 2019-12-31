import React from 'react';
import Nav from '../layout/Nav';
import SignUpForm from './SignUpForm';

export default function SignUp() {
  return (
    <section className='login'>
      <Nav />
      <section className='login-section'>
        <SignUpForm />
      </section>
    </section>
  );
}

import React from 'react';
import Nav from '../layout/Nav';
import SignInForm from './SignInForm';

export default function SignIn() {
  return (
    <section className='login'>
      <Nav />
      <section className='login-section'>
        <SignInForm />
      </section>
    </section>
  );
}

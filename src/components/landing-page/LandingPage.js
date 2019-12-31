import React from 'react';

import Nav from '../layout/Nav';
import Illustration from './Illustration';
import Info from './Info';

export default function LandingPage() {
  return (
    <section className='landing-page'>
      <Nav />
      <section className='hero'>
        <Info />
        <Illustration />
      </section>
    </section>
  );
}

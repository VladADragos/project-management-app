import React from 'react';
import { Link } from 'react-router-dom';
export default function Info() {
  return (
    <section className='hero-info'>
      <h1 className='hero__header'>
        ELOUQENT
        <br />
        <span className='hero__header-highlight'>MANAGEMENT</span>
      </h1>
      <h2 className='hero__sub-header'>How project management should be.</h2>
      <Link to='/sign-up' className='hero__button button button--cta'>
        REGISTER
      </Link>
    </section>
  );
}

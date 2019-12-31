import React from 'react';
import Header from '../nav/Header';
import NavLink from '../nav/NavLink';

export default function Nav() {
  return (
    <nav className='nav'>
      <Header />
      <ul className='nav-menu'>
        <NavLink to=''>home</NavLink>
        <NavLink to='about'>about</NavLink>
        <NavLink to='demo'>demo</NavLink>
        <NavLink to='sign-up'>sign-up</NavLink>
        <NavLink to='sign-in'>sign-in</NavLink>
      </ul>
    </nav>
  );
}

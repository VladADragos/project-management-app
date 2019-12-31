import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='nav-header'>
      E <span className='nav-header__highlight'>M</span>
    </header>
  );
}

function NavLink({ children, to }) {
  return (
    <li className='nav-menu__item'>
      <Link className='nav-menu__link' to={`/${to}`}>
        {children}
      </Link>
    </li>
  );
}

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

import React from 'react';
import { Link } from 'react-router-dom';

export default function NavLink({ children, to }) {
  return (
    <li className='nav-menu__item'>
      <Link className='nav-menu__link link' to={`/${to}`}>
        {children}
      </Link>
    </li>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Link to='/'>
      <header className='nav-header'>
        E <span className='nav-header__highlight'>M</span>
      </header>
    </Link>
  );
}

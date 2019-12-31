import React from 'react';
import Header from '../nav/Header';
import NavLink from '../nav/NavLink';

export default function AppNav() {
  return (
    <nav className='app-nav'>
      <div className='app-nav-inner'>
        <Header />
        <ul className='app-nav-menu'>
          <NavLink to=''>Back</NavLink>
          <NavLink to='demo/search'>Search</NavLink>
          <NavLink to='demo/chat'>Chat</NavLink>
          <NavLink to='demo/board'>Board</NavLink>
        </ul>
      </div>
    </nav>
  );
}

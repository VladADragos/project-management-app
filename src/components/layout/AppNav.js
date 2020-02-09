import React from 'react';
import Header from '../nav/Header';
import NavLink from '../nav/NavLink';

export default function AppNav() {
  return (
    <nav className='app-nav'>
      {/* <div className='app-nav-inner'> */}
      <Header />
      <ul className='app-nav-menu'>
        <NavLink to=''>
          <i className='fas fa-long-arrow-alt-left fa-fw' title="back"></i>
        </NavLink>
        <NavLink to='demo/profile'>
          <i className='fas fa-user-circle fa-fw' title="profile"></i>
        </NavLink>
        {/* <NavLink to='demo/search'>Search</NavLink> */}
        <NavLink to='demo/chat'>
          <i className='fas fa-comment-alt fa-fw' title="chat"></i>
        </NavLink>
        <NavLink to='demo/board'>
          <i className='fas fa-clipboard-list fa-fw' title="board"></i>
        </NavLink>
        <NavLink to='demo/settings'>
          <i className="fas fa-th fa-fw" title="settings"></i>
        </NavLink>
      </ul>
      {/* </div> */}
    </nav>
  );
}

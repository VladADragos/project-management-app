import React from 'react';
import img from '../../../assets/images/user.jpg';

function Rooms({ rooms }) {
  return (
    <ul className='chat-sidebar-list'>
      <h2 className='chat-sidebar-list__header'>Rooms:</h2>
      <Room selected={true} />
      <Room />
      <Room />
      <Room />
    </ul>
  );
}

function Room({ room, selected }) {
  const s = selected ? 'room--selected' : '';
  return <li className={`room ${s}`}>room name</li>;
}

function DirectMessages({ dms }) {
  return (
    <ul className='chat-sidebar-list'>
      <h2 className='chat-sidebar-list__header'>Direct Messages:</h2>
      <InlineUser user={{ name: 'vlad', status: 'online' }} />
      <InlineUser user={{ name: 'dawood', status: 'offline' }} />
    </ul>
  );
}
function Members({ members }) {
  return (
    <ul className='chat-sidebar-list'>
      <h2 className='chat-sidebar-list__header'>Members:</h2>
      <InlineUser user={{ name: 'vlad', status: 'online' }} />
      <InlineUser user={{ name: 'dawood', status: 'offline' }} />
      <InlineUser user={{ name: 'arvid', status: 'offline' }} />
      <InlineUser user={{ name: 'housam', status: 'online' }} />
    </ul>
  );
}

function User({ user }) {
  return (
    <div className='user'>
      <div className='user-image-container'>
        <img className='user-image' src={img} alt='user' />
        <i className='fas fa-circle user-status-icon'></i>
      </div>
      <div className='user-text'>
        <h3 className='user-name'>User</h3>
        <p className='user-status-toggle'>
          Online <i className='fas fa-sort-down'></i>
        </p>
      </div>
    </div>
  );
}

function InlineUser({ user }) {
  return (
    <li className='inline-user'>
      <i className={`fas fa-circle ${user.status}`}></i> {user.name}
    </li>
  );
}

function SideBar() {
  return (
    <section className='chat-sidebar'>
      <User />
      <Rooms />
      <DirectMessages />
      <Members />
    </section>
  );
}

export default SideBar;

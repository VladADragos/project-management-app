import React, { useState, useEffect, useRef } from 'react';

import io from 'socket.io-client';

let socket;
export default function Join() {
  const [name, setName] = useState('vlad');
  const [room, setRoom] = useState('main');
  const [text, setText] = useState('testing');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'localhost:5000/chat';

  useEffect(() => {
    socket = io(ENDPOINT, { nsp: '/chat' });
    console.log(socket);
  }, []);

  useEffect(() => {
    socket.on('chatToClient', message => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  function joinRoom() {
    socket.emit('joinRoom', room);
    socket.on('joinedRoom', room => console.log(`connected to room ${room}`));
  }

  function sendMsg() {
    socket.emit('chatToServer', { sender: name, room, message: text });
  }

  return (
    <div>
      <h2>join</h2>
      <div>
        <label htmlFor=''>name</label>
        <input
          type='text'
          placeholder=''
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <label htmlFor=''>room</label>
        <input
          type='text'
          placeholder=''
          value={room}
          onChange={event => setRoom(event.target.value)}
        />
        <input
          value={text}
          type='text'
          placeholder=''
          onChange={event => setText(event.target.value)}
        />
        <button onClick={sendMsg}>send</button>
        <button onClick={joinRoom}>connect</button>
      </div>
    </div>
  );
}

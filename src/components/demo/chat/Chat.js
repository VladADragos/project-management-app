import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import uuid from 'uuid/v4';
import EmojiPicker from 'emoji-twemoji-react';

import InputArea from './InputArea';
import Messages from './Massages';
import SideBar from './SideBar';

let socket;
export default function Chat() {
  const name = 'vlad';
  const [room, setRoom] = useState('main');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'localhost:5000/chat';

  useEffect(() => {
    socket = io(ENDPOINT, { nsp: '/chat' });
    joinRoom();
    console.log(socket);
  }, []);

  useEffect(() => {
    socket.on('chatToClient', message => {
      setMessages([...messages, message]);
    });
    console.log(messages);
  }, [messages]);

  function joinRoom() {
    socket.emit('joinRoom', room);
    socket.on('joinedRoom', room => console.log(`connected to room ${room}`));
  }

  function sendMessage(message) {
    socket.emit('chatToServer', { sender: name, room, message, id: uuid() });
  }
  return (
    <section className='chat'>
      <SideBar />
      <section className="chat-area">

        <Messages messages={messages} />
        <InputArea sendMessage={sendMessage} />
      </section>
    </section>
  );
}

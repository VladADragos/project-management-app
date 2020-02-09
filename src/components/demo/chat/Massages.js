import React from 'react';

import Emoji from 'react-twemoji';
export default function Massages({ messages }) {
  return (
    <div>
      {messages.length > 0 &&
        messages.map(message => <h2 key={message.id}>{message.message}</h2>)}
    </div>
  );
}

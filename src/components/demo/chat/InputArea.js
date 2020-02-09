import React, { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import Picker from 'emoji-picker-react';

export default function InputArea({ sendMessage }) {
  const [message, setMessage] = useState('');
  const [emoji, setEmoji] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    sendMessage(message);
    setMessage('');
  }
  function onChange(event) {
    setMessage(event.target.value);
  }
  function onEmojiClick(event, { emoji }) {
    event.preventDefault();
    setEmoji(emoji);
  }

  useEffect(() => {
    setMessage(message + emoji);
    setEmoji('');
  }, [emoji]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          name='message'
          id=''
          cols='30'
          rows='10'
          onChange={onChange}
          value={message}></textarea>

        <button type='submit'>send</button>
        {/* <Picker onEmojiClick={onEmojiClick} /> */}
      </form>
    </div>
  );
}

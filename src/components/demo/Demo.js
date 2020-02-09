import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import EmojiPicker from 'emoji-twemoji-react';

import AppNav from '../layout/AppNav';
import Board from './drag-and-drop/Board';
import Chat from './chat/Chat';
import Index from './index/Index';

export default function Demo() {
  return (
    <section className='demo'>
      <AppNav />
      <Switch>
        <Route path='/demo/'>
          <Index />
        </Route>
        <Route path='/demo/board'>
          <Board />
        </Route>
        <Route path='/demo/chat'>
          <Chat />
        </Route>
      </Switch>
    </section>
  );
}

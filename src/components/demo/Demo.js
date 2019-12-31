import React from 'react';
import AppNav from '../layout/AppNav';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Board from './drag-and-drop/Board';
export default function Demo() {
  return (
    <section className='demo'>
      <AppNav />
      <Switch>
        <Route path='/demo/board'>
          <Board />
        </Route>
      </Switch>
    </section>
  );
}

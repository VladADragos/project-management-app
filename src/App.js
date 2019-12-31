import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import LandingPage from './components/landing-page/LandingPage';
import SignIn from './components/auth/sign-in/SignIn';
import SignUp from './components/auth/sign-up/SignUp';
import About from './components/about/About';
import './assets/style/main.scss';
import Demo from './components/demo/Demo';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route path='/demo'>
          <Demo />
        </Route>
        <Route exact path='/sign-in'>
          <SignIn />
        </Route>
        <Route exact path='/sign-up'>
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

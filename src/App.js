import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import LandingPage from './components/landing-page/LandingPage';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

import './assets/style/main.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <div className='app'>
            <LandingPage />
          </div>
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

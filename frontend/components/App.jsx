import React from 'react';
import GreetingContainer from './greeting/greetings_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { Route } from 'react-router-dom';


const App = () => (
  <div>
    <header>
      <h1 className="splash-header">Snoozer</h1>
    <Route exact path='/' component={GreetingContainer} />
    </header>
    
    <Route path='/login' component={LoginFormContainer} />
    <Route path='/signup' component={SignupFormContainer} />
  </div>
);

export default App;
import React from 'react';
import GreetingContainer from './greeting/greetings_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route } from 'react-router-dom';
import Splash from './splash';


const App = () => (
  <div>
    <header className="nav-container">
    <Route exact path='/' component={GreetingContainer} />
    </header>
    <AuthRoute exact path="/" component={Splash} />
    <AuthRoute path='/login' component={LoginFormContainer} />
    <AuthRoute path='/signup' component={SignupFormContainer} />
  </div>
);

export default App;
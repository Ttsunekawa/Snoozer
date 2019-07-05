import React from 'react';
import GreetingContainer from './greeting/greetings_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch, Redirect } from 'react-router-dom';
import Splash from './splash';


const App = () => (
  <div>
    <header className="nav-container">
    <Route exact path='/' component={GreetingContainer} />
    </header>

    <Switch>
      <AuthRoute exact path='/login' component={LoginFormContainer} />
      <AuthRoute exact path='/signup' component={SignupFormContainer} />
      <Route exact path="/" component={Splash} />
      <Redirect to="/" component={Splash} />
    </Switch>
  </div>
);

export default App;
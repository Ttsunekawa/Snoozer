import React from 'react';
import GreetingContainer from './greeting/greetings_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import LeaguesContainer from './leagues/leagues_container'
import SplashContainer from './splash/splash_container';
import LeftPanelContainer from './leagues/left_panel_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch, Redirect } from 'react-router-dom';


const App = () => (
  <div>
    <header className="nav-container">
      <Route exact path='/' component={GreetingContainer} />
    </header>
   

    <Switch>
      <Route path="/leagues" component={LeaguesContainer} />
      <AuthRoute exact path='/login' component={LoginFormContainer} />
      <AuthRoute exact path='/signup' component={SignupFormContainer} />
      <Route exact path="/" component={SplashContainer} />
      <Redirect to="/" component={SplashContainer} />
    </Switch>
  </div>
);

export default App;
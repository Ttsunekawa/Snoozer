import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo';


const Greeting = ({ state, currentUser, logout }) => {
  let formType = "Greeting";


  const sessionLinks = () => (
    <div className = "splash-auth-container">
      <Logo formType={formType} />
      <nav className="splash-auth">
        <Link className="auth-button" to="/login">Log In</Link>
        <br/>
        <Link className="auth-button" to="/signup">SIGN UP</Link>
      </nav>
    </div>
  );

  const personalGreeting = () => {
    return (
    <div className="splash-auth-container">
      <Logo formType={formType} />
      <nav className="splash-auth">
        <Link className="auth-button goto-leagues" to="/leagues">Leagues</Link>
        <br/>
        <button className="auth-button logout" onClick={logout}>Log Out</button>
      </nav>
    </div>
    )
  };

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;

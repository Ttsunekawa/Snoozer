import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo';

const Greeting = ({ currentUser, logout }) => {
  let formType = "Greeting";

  const sessionLinks = () => (
    <div className = "splash-auth-container">
      <Logo formType={formType} />
      <nav className ="splash-auth">
        <Link className="auth-button" to="/login">Log In</Link>
        <br/>
        <Link className="auth-button" to="/signup">SIGN UP</Link>
      </nav>
    </div>
  );

  const personalGreeting = () => {
    return (
    <div className="splash-auth-container">
      <h2>Welcome, {currentUser.username}</h2>
      <button onClick={logout}>Log Out</button>
    </div>
    )
  };

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;

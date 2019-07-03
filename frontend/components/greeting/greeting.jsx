import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav>
      <Link to="/login">Log In</Link>
      <br/>
      <Link to="/signup">Sign Up</Link>
    </nav>
  );

  const personalGreeting = () => {
    return (<div>
      <h2>Welcome, {currentUser.username}</h2>
      <button onClick={logout}>Log Out</button>
    </div>
    )
  };

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;

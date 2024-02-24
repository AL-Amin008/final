// Navigation.js

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext'; // Assuming you have an AuthContext to manage authentication state

const Navigation = () => {
  const { isLoggedIn } = useContext(AuthContext); // Get authentication status from context

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {isLoggedIn ? (
          <>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/create-account">Create Account</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;

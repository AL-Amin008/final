// In your navigation component or any other component where you have the link
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/create-account">Create Account</Link></li>
        {/* Other navigation links */}
      </ul>
    </nav>
  );
};

export default Navigation;

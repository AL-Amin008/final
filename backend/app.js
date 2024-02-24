// App.js

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { isLoggedIn, getToken } from './services/AuthService';
import LoginPage from './LoginPage';
import HomePage from './HomePage';

const App = () => {
  useEffect(() => {
    const token = getToken();
    if (token) {
      // Verify token validity with the server and fetch user data
    }
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;

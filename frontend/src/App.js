// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation'; // Import the Navigation component
import LoginPage from './components/LoginPage'; // Assuming you have a login page component
import AccountCreationPage from './components/AccountCreationPage'; // Assuming you have an account creation page component

const App = () => {
  return (
    <Router>
      <div>
        <Navigation /> {/* Include the Navigation component */}
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/create-account" component={AccountCreationPage} />
          {/* Other routes */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;

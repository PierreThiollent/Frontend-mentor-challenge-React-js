import React from 'react';
import './Style/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Screens/Home';
import Details from './Screens/Details';

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/details'>
        <Details />
      </Route>
    </Switch>
  </Router>
);

export default App;

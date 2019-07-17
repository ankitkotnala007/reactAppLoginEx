import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Login from './views/login';
import Home from './views/home';

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path='/' component={Login}/>
      <Route exact path='/home' component={Home}/>
    </Switch>
  </Router>
  );
}

export default App;

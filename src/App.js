import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import NBA from './components/Sports/NBA/NBA';
import Contact from './components/Contact/Contact';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sports/nba" component={NBA} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

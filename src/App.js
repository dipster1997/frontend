import React, { Component } from 'react';
import { Nav } from './common/Nav';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { connect } from 'react-redux';

import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    
  }
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome</h1>
              <Nav />
          </header>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </div>
        </div>
    );
  }
}

export default connect()(App);
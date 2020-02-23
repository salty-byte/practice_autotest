import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import MainFrame from './containers/MainFrame';
import MainRouter from './containers/MainRouter';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router className="App">
        <MainFrame>
          <MainRouter />
        </MainFrame>
      </Router>
    );
  }
}

export default App;

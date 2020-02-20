import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import WrappedContent from './components/WrappedContent'
import { BrowserRouter as Router } from 'react-router-dom';

import MainFrame from './containers/MainFrame';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Info from './pages/Info';
import Settings from './pages/Settings';
import RedListSearch from './pages/RedListSearch';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router className="App">
        <MainFrame>
          <Switch>
            <Route exact path="/" component={WrappedContent(Home)} />
            <Route exact path="/info" component={WrappedContent(Info)} />
            <Route exact path="/settings" component={WrappedContent(Settings)} />
            <Route exact path="/red-list-search" component={WrappedContent(RedListSearch)} />
            <Route component={WrappedContent(NotFound)} />
          </Switch>
        </MainFrame>
      </Router>
    );
  }
}

export default App;

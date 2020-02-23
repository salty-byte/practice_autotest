import React from 'react';
import { Route, Switch } from 'react-router-dom';

import WrappedContent from '../components/WrappedContent'
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Info from '../pages/Info';
import Settings from '../pages/Settings';
import RedListSearch from '../pages/RedListSearch';

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={WrappedContent(Home)} />
      <Route exact path="/info" component={WrappedContent(Info)} />
      <Route exact path="/settings" component={WrappedContent(Settings)} />
      <Route exact path="/red-list-search" component={WrappedContent(RedListSearch)} />
      <Route component={WrappedContent(NotFound)} />
    </Switch>
  )
}

export default MainRouter;

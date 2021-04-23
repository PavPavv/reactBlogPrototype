import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import Auth from './auth/AuthPage';
import Blog from './blog/BlogPage';

const MainRouter = () => {
  return (
    <Switch>
      <Route component={Blog} path="/" exact />
      <Route component={Auth} path="/auth" exact />
      <Redirect to="/" />
    </Switch>
  )
}

export default withRouter(MainRouter);

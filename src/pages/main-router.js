import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import AuthPage from './auth/AuthPage';
import BlogPage from './blog/BlogPage';
import TodosPage from './todos/TodosPage';
import FormPage from './form/FormPage';
import NotFoundPage from './NotFound/NotFoundPage';


const MainRouter = () => {
  const token = localStorage.getItem('fakeToken');


  let routes = (
    <Switch>
      <Route path="/auth" exact component={AuthPage} />
      <Route path="/" exact component={BlogPage} />
      <Redirect to="/" />
    </Switch>
  );

  if (token) {
    routes = (
      <Layout>
        <Switch>
          <Route path="/" exact component={BlogPage} />
          <Route path="/todos" exact component={TodosPage} />
          <Route path="/form" exact component={FormPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    );
  }

  return (
    <div>
      {routes}
    </div>
  )
}

export default withRouter(MainRouter);

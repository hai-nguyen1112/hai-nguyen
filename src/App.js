import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

import Layout from './components/Layout';
import MainPage from './components/MainPage';

const App = () => {
  const routes = (
    <Switch>
      <Route path="/" component={MainPage} />
      <Redirect from="*" to="/" />
    </Switch>
  );
  return <Layout>{routes}</Layout>;
};

export default App;

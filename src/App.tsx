import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { connect } from 'react-redux';

import { fetchUser } from './redux/actions';
import { StoreState } from './redux/reducers/rootReducer';
import { UserState } from './redux/reducers/userReducer';
import Layout from './components/Layout';
import MainPage from './components/MainPage';

interface AppProps {
  user: UserState;
  fetchUser: () => void;
}

const App = (props: AppProps): JSX.Element => {
  const { fetchUser, user } = props;

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const routes: JSX.Element = (
    <Switch>
      <Route path="/" component={MainPage} />
      <Redirect from="*" to="/" />
    </Switch>
  );

  return (
    <>
      {user.isLoadingUser ? <div>Loading...</div> : <Layout>{routes}</Layout>}
    </>
  );
};

const mapStateToProps = (state: StoreState): { user: UserState } => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { fetchUser })(App);

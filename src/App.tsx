import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { connect } from 'react-redux';

import { fetchUser } from './redux/actions';
import { StoreState } from './redux/reducers/rootReducer';
import { UserState } from './redux/reducers/userReducer';
import Layout from './components/Layout';
import MainPage from './components/MainPage';
import Spinner from './components/UI/Spinner';
import ErrorMessage from './components/UI/ErrorMessage';

export interface AppProps {
  user: UserState;
  fetchUser: () => void;
}

export const _App = (props: AppProps): JSX.Element => {
  const { fetchUser, user } = props;

  React.useEffect(() => {
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
      {user.isLoadingUser ? (
        <Spinner />
      ) : user.errorMessage.length > 0 ? (
        <ErrorMessage />
      ) : (
        <Layout>{routes}</Layout>
      )}
    </>
  );
};

const mapStateToProps = (state: StoreState): { user: UserState } => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { fetchUser })(_App);

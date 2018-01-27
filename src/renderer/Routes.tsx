import * as React from 'react';
import { Switch, Route } from 'react-router';
import CounterPage from './containers/CounterPage';

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          path='/*'
          exact
          render={() => (
            <CounterPage />
          )}
        />
      </Switch>
    );
  }
}

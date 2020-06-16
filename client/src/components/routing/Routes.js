import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Dashboard from '../dashboard/dashboard';
import template from '../dashboard/template';
import createShip from '../dashboard/createShip';
import PrivateRoute from './PrivateRoute';

const Routes = (props) => {
  return (
    <section className="container">
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/createship" component={createShip} />
        <PrivateRoute exact path="/template" component={template} />
      </Switch>
    </section>
  );
};

export default Routes;

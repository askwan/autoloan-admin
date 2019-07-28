import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import IndexPage from './routes/IndexPage';

import Login from './routes/login'
import Regist from './routes/login/regist'
import NotFound from './routes/NotFound'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/admin" component={IndexPage} />
        <Route path='/login' exact component={Login} />
        <Route path='/regist' exact component={Regist} />
        <Redirect from='/' to='/login' />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;

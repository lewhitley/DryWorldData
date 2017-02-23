import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import App from './app';
import Table from './table/table';

const Root = () => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path=":version/topics/:topic" component={Table}/>
    </Route>
  </Router>
);

export default Root;

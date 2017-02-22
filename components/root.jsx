import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import Table from './table';

const Root = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/v1/topics/national" component={() => (<Table version="v1" topic="national"/>)}/>
        <Route path="/v2/topics/national" component={() => (<Table version="v2" topic="national"/>)} />
        <Route path="/v1/topics/world" component={() => (<Table version="v1" topic="world"/>)} />
        <Route path="/v2/topics/world" component={() => (<Table version="v2" topic="world"/>)} />
      </Route>
    </Router>
  );
};

export default Root;

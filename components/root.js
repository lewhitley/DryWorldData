import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import App from './app';

const Root = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/v1/topics/national" component={() => (<App version="v1" topic="national"/>)}/>
      <Route path="/v2/topics/national" component={() => (<App version="v2" topic="national"/>)} />
      <Route path="/v1/topics/world" component={() => (<App version="v1" topic="world"/>)} />
      <Route path="/v2/topics/world" component={() => (<App version="v2" topic="world"/>)} />
    </Router>
  );
};

export default Root;

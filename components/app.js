import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <header>
      <Link to={'/v1/topics/national'}>States</Link>
      <Link to={'/v2/topics/national'}>State Capitals</Link>
      <Link to={'/v1/topics/world'}>World Version 1</Link>
      <Link to={'/v2/topics/world'}>World Version 2</Link>
    </header>
    <main>
      { children }
    </main>
  </div>
);

export default App;

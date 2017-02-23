import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <header>
      <section className="dropdown-title dt1">Version 1
        <ul className="dropdown d1">
          <li><Link to={'/v1/topics/national'}>States</Link></li>
          <li><Link to={'/v1/topics/world'}>World Countries</Link></li>
        </ul>
      </section>
      <section className="dropdown-title dt2">Version 2
        <ul className="dropdown d2">
          <li><Link to={'/v2/topics/national'}>State Capitals</Link></li>
          <li><Link to={'/v2/topics/world'}>World Countries</Link></li>
        </ul>
      </section>
    </header>
    <main>
      { children }
    </main>
  </div>
);

export default App;

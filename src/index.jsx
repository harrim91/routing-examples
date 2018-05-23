import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import App from './examples/route';

const app = (
  <Router>
    <App />
  </Router>
);

render(app, document.getElementById('root'));

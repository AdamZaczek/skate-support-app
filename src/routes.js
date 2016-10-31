import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import NotFound from './components/notFound';

const Routes = ({store}) => (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;

import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import News from './components/News';
import HowToStart from './components/HowToStart';
import SkateTips from './components/SkateTips';
import Faq from './components/Faq';
import About from './components/About';
import NotFound from './components/NotFound';

const Routes = ({store}) => (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/news" component={News} />
    <Route path="/howToStart" component={HowToStart} />
    <Route path="/tips" component={SkateTips} />
    <Route path="/faq" component={Faq} />
    <Route path="/about" component={About} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;

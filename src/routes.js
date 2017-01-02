import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import Home from './components/Home';
import News from './components/News';
import HowToStart from './components/HowToStart';
import SkateTips from './components/SkateTips';
import Faq from './components/Faq';
import About from './components/About';
import NotFound from './components/NotFound';

const Routes = ({store}) => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/news" component={News} />
      <Route path="/howToStart" component={HowToStart} />
      <Route path="/tips" component={SkateTips} />
      <Route path="/faq" component={Faq} />
      <Route path="/about" component={About} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;

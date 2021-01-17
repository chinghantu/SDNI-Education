import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import history from './history';

import Home from './components/home/Home'
import About from './components/about/About'
import Event from './components/event/Event'
import Programs from './components/programs/Programs'
import News from './components/news/News'
import Donate from './components/donate/Donate';
import Networking from './components/networking/Networking';
import Outreach from './components/outreach/Outreach';

import ReactGA from 'react-ga';

import Error404 from './components/404/404';

function App() {

  const trackingId = "UA-163661188-1";
  ReactGA.initialize(trackingId);
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' render={(props) => <Home {...props} />} />
        <Route exact path='/about' render={(props) => <About {...props} />} />
        <Route exact path='/programs' render={(props) => <Programs {...props} />} />
        <Route exact path='/events' render={(props) => <Event {...props} />} />
        <Route exact path='/news' render={(props) => <News {...props} />} />
        <Route exact path='/donate' render={(props) => <Donate {...props} />} />
        <Route exact path='/networking' render={(props) => <Networking {...props} />} />
        <Route exact path='/outreach' render={(props) => <Outreach {...props} />} />
        <Route path='*' exact={true} component={Error404} />
      </Switch>
    </Router>

  );
}

export default App;

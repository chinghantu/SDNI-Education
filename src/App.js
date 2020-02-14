import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/home/Home'
import About from './components/about/About'
import Event from './components/event/Event'
import Programs from './components/programs/Programs'
import News from './components/news/News'
import Donate from './components/donate/Donate';
import Networking from './components/networking/Networking';
import SeedGrants from './components/seed/SeedGrants';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/events'>
          <Event />
        </Route>
        <Route exact path='/programs'>
          <Programs />
        </Route>
        <Route exact path='/news'>
          <News />
        </Route>
        <Route exact path='/donate'>
          <Donate />
        </Route>
        <Route exact path='/networking'>
          <Networking />
        </Route>
        <Route exact path='/seed_grants'>
          <SeedGrants />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;

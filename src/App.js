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
import Outreach from './components/outreach/Outreach';

function App() {
  return (
    <Router>
      <Route exact path='/' render={(props) => <Home {...props} />} />
      <Route exact path='/about' render={(props) => <About {...props} />} />
      <Route exact path='/programs' render={(props) => <Programs {...props} />} />
      <Route exact path='/events' render={(props) => <Event {...props} />} />
      <Route exact path='/news' render={(props) => <News {...props} />} />
      <Route exact path='/donate' render={(props) => <Donate {...props} />} />
      <Route exact path='/networking' render={(props) => <Networking {...props} />} />
      <Route exact path='/outreach' render={(props) => <Outreach {...props} />} />
    </Router>

  );
}

export default App;

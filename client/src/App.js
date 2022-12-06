import React from 'react'
import Home from "./components/Home";
import Developer from './components/Developer';
import Manager from './components/Manager';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
      <Router>
            <Switch>
              <Route exact  path="/"> <Home /> </Route>
              <Route exact path="/developer"> <Developer /> </Route>
              <Route exact path="/manager"> <Manager /> </Route>
            </Switch>
      </Router>
  );
import NavBar from './components/NavBar'

function App() {
  return (
    <NavBar/>
  )
}

export default App

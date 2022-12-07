import React from 'react'
import Home from "./components/Home";
import Developer from './components/Developer';
import Manager from './components/Manager';
// import NavBar from './components/NavBar'
import SignupForm from './components/SignupForm';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
      <Router>
        {/* <NavBar /> */}
            <Switch>
              <Route exact  path="/"> <Home /> </Route>
              <Route exact path="/developer"> <Developer /> </Route>
              <Route exact path="/manager"> <Manager /> </Route>
              <Route exact path = "/signup-form" > <SignupForm /> </Route>
            </Switch>
      </Router>
  );

 }

export default App

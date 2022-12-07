import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Manager from './components/Manager';
import Developer from './components/Developer';
import SignupForm from './components/SignupForm';
import ProjectManagerLoginForm from './components/ProjectManagerLoginForm';
import DeveloperLoginForm from './components/DeveloperLoginForm.js';
// import NavBar from './components/NavBar'

function App() {
  return (
      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route path="/developer" element={<Developer />} />
          <Route path="/project_manager" element={<Manager />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/d-login" element={<DeveloperLoginForm />} />
          <Route path="/pm-login" element={<ProjectManagerLoginForm />} />
        </Routes>
      </Router>
  );

 }

export default App

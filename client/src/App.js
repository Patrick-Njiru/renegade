import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Manager from './components/Manager';
import Developer from './components/Developer';
import SignupForm from './components/SignupForm';
import ProjectManagerLoginForm from './components/ProjectManagerLoginForm';
import DeveloperLoginForm from './components/DeveloperLoginForm.js';

function App() {
  const [developer, setDeveloper] = useState(null)
  const [projectManager, setProjectManager] = useState(null)

  useEffect(() => {

    if (developer) {
      fetch("/developers/me")
      .then(r => {
        r.json().then(dev => setDeveloper(dev))
        return <Developer developer={developer} />
      })
    } else if(projectManager) {
      fetch('/project_managers/me')
      .then(r => {
        r.json().then(pM => setProjectManager(pM))
        return <Manager projectManager={projectManager} />
      })
    }
}, [developer, projectManager])

  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route path="/developer" element={<Developer developer={developer} />} />
          <Route path="/project_manager" element={<Manager project_manager={projectManager} />} />
          <Route path="/signup/developer" element={<SignupForm setDeveloper={setDeveloper} />} />
          <Route path="/login/developer" element={<DeveloperLoginForm user={developer} setDeveloper={setDeveloper} />} />
          <Route path="/login/project_manager" element={<ProjectManagerLoginForm user={developer} setProjectManager={setProjectManager} />} />
        </Routes>
      </Router>
  )
}

export default App;

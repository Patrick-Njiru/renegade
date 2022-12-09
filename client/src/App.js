import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Developer from './components/Developer';
import SignupForm from './components/SignupForm';
import ProjectManagerLoginForm from './components/ProjectManagerLoginForm';
import DeveloperLoginForm from './components/DeveloperLoginForm.js';
import ProjectManager from './components/ProjectManager';

function App() {
  const [developer, setDeveloper] = useState(null)
  const [projectManager, setProjectManager] = useState(null)

  useEffect(() => {

    if (developer) {
      fetch("/developers/me")
      .then(r => r.json()).then(dev => {setDeveloper(dev)})
    } else if(projectManager) {
      fetch('/project_managers/me')
      .then(r => {r.json().then(pM => setProjectManager(pM))})
    }
  }, [developer, projectManager])

  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} /> 
          <Route path="/developer" element={<Developer developer={developer} />} />
          <Route path="/project_manager" element={<ProjectManager project_manager={projectManager} />} />
          <Route path="/signup/developer" element={<SignupForm setDeveloper={setDeveloper} />} />
          <Route path="/login/developer" element={<DeveloperLoginForm user={developer} setDeveloper={setDeveloper} />} />
          <Route path="/login/project_manager" element={<ProjectManagerLoginForm user={developer} setProjectManager={setProjectManager} />} />
        </Routes>
      </Router>
  )
}

export default App;

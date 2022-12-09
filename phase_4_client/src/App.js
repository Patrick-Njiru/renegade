import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home';
import DeveloperLoginForm from './DeveloperLoginForm.js';
import ProjectManagerLoginForm from './ProjectManagerLoginForm';
import SignupForm from './SignupForm'
import ProjectManager from './ProjectManager'
import Developer from "./Developer"


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
           <Route path="/project_manager" element={<ProjectManager projectManager={projectManager} />} />
           <Route path="/signup/developer" element={<SignupForm setDeveloper={setDeveloper} />} /> 
           <Route path="/login/developer" element={<DeveloperLoginForm user={developer} setDeveloper={setDeveloper} />} />
           <Route path="/login/project_manager" element={<ProjectManagerLoginForm user={developer} setProjectManager={setProjectManager} />} />
         </Routes>
      </Router>
  )
}

export default App;
